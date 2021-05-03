# Installation

<div class="admonition note">
    <p class="first admonition-title">
        Note
    </p>
    <p class="last">
        - CusProSe requires a python version >= 3.7
    </p>
    <p class="last">
        - CusProse has only been tested on Linux and MacOS systems. 
    </p>
</div>

## External dependencies
CusProSe relies on three external tools: hmmer, muscle and usearch.
The first two can be easily installed from the following commands:

* [hmmer](http://hmmer.org/download.html) (tested with version 3.3)
``` bash
sudo apt install hmmer
```
* [muscle](https://www.drive5.com/muscle/downloads.htm) (tested with version 3.8.1551)
``` bash
sudo apt install muscle
```

For usearch, you first need to download it here:
[usearch](https://www.drive5.com/usearch/download.html) (tested with version v10.0.240)

Next, you will have to rename it and make it accessible from anywhere in your system:
``` bash
# rename to usearch
mv usearchXX.X.XXX_i86xxxx usearch

# make usearch executable
chmod +x usearch

# make usearch easily accessible
mkdir ~/bin
mv usearch ~/bin
```

Finally, execute the following command that will make usearch accessible to the system
``` bash
echo -e "\n\n# Add usearch to PATH\nexport PATH=$PATH:~/bin" >> ~/.bashrc
```

## Create an isolated environment
Although not indispensable, this step is highly recommended (it will allow you to work on different projects avoiding potential conflicts between different versions of some python libraries).
 
### Install virtualenv
``` python
python3 -m pip install virtualenv
```

### Create a virtual python3 environment
```bash
virtualenv -p python3 my_env
```

### Activate the created environment
```bash
source my_env/bin/activate
```

Once activated, any python library you'll install using pip will be installed solely in this isolated environment.

<div class="admonition note">
    <p class="first admonition-title">
        Note
    </p>
    <p class="last">
Every time you'll need to work with libraries installed in this environment (e.g. work on your project), you'll have
to activate it.
    </p>
</div>


### Exit the activated environment
Once you're done working on your project, simply type the following command to exit the environment.
```bash
deactivate
```




## Download and install the latest release of CusProSe
Click here for the latest release: 
[ ![](./icons/download-flat/16x16.png "Click to download the latest release")](https://github.com/nchenche/cusProSe/releases/latest/)

### Uncompress the archive
If you downloaded the *.zip* file:
```bash
unzip cusProSe-x.x.x.zip
```

If you downloaded the *.tar.gz* file:
```bash
tar xzvf cusProSe-x.x.x.tar.gz
```

### Go to the cusProSe directory
 
```bash
cd cusProSe-x.x.x/
```

You should have at this location the following architecture:
<pre style="margin-top: -8px"><font color="#3465A4"><b>  .</b></font>
  ├── <font color="#3465A4"><b>docs</b></font>
  ├── <font color="#3465A4"><b>iterhmmbuild</b></font>
  ├── <font color="#3465A4"><b>lib</b></font>
  ├── MANIFEST.in
  ├── mkdocs.yml
  ├── <font color="#3465A4"><b>prosecda</b></font>
  ├── README.md
  ├── <font color="#3465A4"><b>scripts</b></font>
  └── setup.py
</pre>

### Install CusProSe on your virtual environment
Make sure that your virtual environment is activated and you are at the same level as the setup.py. Then type the following command: 

```python
pip install .
```

<div class="admonition tip" style="margin-top: 30px;">
    <p class="first admonition-title">
        Note
    </p>  
    <ul>
    If the installation successfully worked, then typing:
  <li>
  <code>iterhmmbuild</code> should display:
    <pre class="parameters">usage: iterhmmbuild [-h] -fa [FA] -protdb [PROTDB] [-name [NAME]] [-out [OUT]] [-id ID]
                    [-cov COV] [-cval CVAL] [-ival IVAL] [-acc ACC]
iterhmmbuild: error: the following arguments are required: -fa, -protdb</pre>
  </li>

  <li>
    <code>prosecda</code> should display:
    <pre class="parameters">usage: prosecda [-h] -proteome [PROTEOME] -hmmdb [HMMDB] -rules [RULES] [-out [OUT]] 
                    [-cov COV] [-cevalue CVAL] [-ievalue IVAL] [-score SCORE] [-acc ACC]
                    [--nopdf]
prosecda: error: the following arguments are required: -proteome, -hmmdb, -rules</pre>
  </li>

  <li>
    <code>create_hmmdb</code> should display:
    <pre class="parameters">usage: create_hmmdb [-h] -hmmdir [HMMDIR] [-dbname [DBNAME]] [-outdir [OUTDIR]]
create_hmmdb: error: the following arguments are required: -hmmdir</pre>
  </li>
</ul>

  Note that all of those commands are accessible from anywhere in your system as long as your virtual environment is activated. 

</div>
