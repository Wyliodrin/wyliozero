import paho.mqtt.client as mqtt
import time
import subprocess
from os import environ as env
import json
from datetime import datetime

def getID():
    x = filter(lambda x : x.startswith('Serial'), subprocess.check_output(['cat','/proc/cpuinfo']).split('\n'))
    if len(x) > 0:
        return x[0].split(':')[1].strip().lstrip('0')
    else:
        return False

localdb = {}
boardId = None

class ArgumentError(Exception):
    def __init__(self, message):

        # Call the base class constructor with the parameters it needs
        super(ArgumentError, self).__init__(message)

class Wmqtt:
    def __init__(self):
        self.initVars()
        self.connect()
        #self.test()

    def initVars(self):
        global boardId
        if env.has_key('BOARD_ID'):
            self.boardId = env['BOARD_ID']
        else:
            self.boardId = getID()
            if self.boardId == False:
                print "Error finding board ID"

        boardId = self.boardId

        if env.has_key('BROKER_ADDRESS'):
            self.brokerAddress = env['BROKER_ADDRESS']
        else:
            print "Error finding MQTT broker address"

        print 'Board ID', self.boardId
        print 'Broker address', self.brokerAddress

    
    def form(self, message):
        return json.dumps({'s':self.boardId, 'm':message, 't':datetime.now().strftime('%Y-%m-%d %H:%M:%S')})


    def on_message(self, client, userdata, messagejson):
        print "am mesaj"
        loaded = json.loads(str(messagejson.payload.decode('utf-8')))


        print loaded

        s = loaded['s']
        message = loaded['m']
        t = loaded['t']


        localdb[t] = message
        print("message received " ,message)
        print("message time " ,t)
        print("message sender " ,s)
        print("message topic", message.topic)
        print("message qos", message.qos)
        print("message retain flag", message.retain)


    def connect(self):
        self.client = mqtt.Client(self.boardId)
        self.client.on_message=self.on_message
        self.client.connect(self.brokerAddress)

        self.client.loop_start()

        self.client.subscribe("broadcast")

    def subscribePrivate(self, topic='default'):
        self.client.subscribe('in' + '/' + self.boardId + '/' + topic)

    def unsubscribePrivate(self, topic='default'):
        self.client.unsubscribe('in' + '/' + self.boardId + '/' + topic)

    def sendPrivate(self, boardId, message, topic='default'):
        self.client.publish('in' + '/' + boardId + '/' + topic, self.form(message))

    



    def subscribePublic(self, boardId, topic='default'):
        self.client.subscribe('out' + '/' + boardId + '/' + topic)

    def unsubscribePublic(self, boardId, topic='default'):
        self.client.subscribe('out' + '/' + boardId + '/' + topic)

    def sendPublic(self, message, topic='default'):
        self.client.publish('out' + '/' + self.boardId + '/' + topic, self.form(message))



    def sendBroadcast(self, message):
        self.client.publish('broadcast', message)
        



"""     def test(self):
        if self.boardId == 'xx':
            self.subscribePrivate()
            self.subscribePublic('yy')
            
        elif self.boardId == 'yy':
            self.sendPrivate('xx', 'gigel')
            self.sendPublic(0)
        else:
            print "nu eok"
        
        time.sleep(10)
        self.client.loop_stop() """


class AwayInfo:
    def __init__(self, broadcast = False, public = False, private = False, who = None, topic = 'default' ):
        if broadcast == True:
            pass
        else:
            if public == False and private == False:
                raise ArgumentError('Object AwayInfo must have either public = True or private = True, but not both at the same time')
            elif public == False and private == True:
                self.path = 'in' + '/' + boardId + '/' + topic
            elif public == True and private == False:
                if who == None:
                    raise ArgumentError('Object AwayInfo must have "who" argument set to awayBoardId if public = True')
                else:
                    self.path = 'out' + '/' + who + '/' + topic

            elif public == True and private == True:
                raise ArgumentError('Object AwayInfo must have either public = True or private = True, but not both at the same time')

    @property
    def receive(self):
        while True:
            if localdb.has_key(self.path):
                yield self.path


if __name__ == "__main__":
    w = Wmqtt()