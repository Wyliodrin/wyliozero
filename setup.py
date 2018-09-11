import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="wyliozero",
    version="0.0.1",
    author="Serban Razvan",
    author_email="razvan.serban@wyliodrin.com",
    description="Wyliolab library",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/Wyliodrin/wyliozero",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 2",
        "License :: OSI Approved :: BSD License",
        "Operating System :: Unix",
    ],
)