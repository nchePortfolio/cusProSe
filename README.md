# CustomProteinSearch

A python library containing two main tools:
1. iterhmmbuild: an HMM profile building based on iterative learning process from seed sequence and a fasta proteic database 
2. prosecda: a specific protein search tool based on user-defined domain architecture


## External dependencies
* [hmmer](http://hmmer.org/download.html) (tested with version 3.3)
``` bash
sudo apt install hmmer
```
* [muscle](https://www.drive5.com/muscle/downloads.htm) (tested with version 3.8.1551)
``` bash
sudo apt install muscle
```
* [usearch](https://www.drive5.com/usearch/download.html) (tested with version v10.0.240)


## Installation

### 1. Create an isolated environment
Although not indispensable, this step is highly recommended (it will allow you to work on different projects without having
any conflicting library versions).
 
#### Install virtualenv
``` python
python3 -m pip install virtualenv
```

#### Create a virtual python3 environment
```bash
virtualenv -p python3 my_env
```

#### Activate the created environment
```bash
source my_env/bin/activate
```

Once activated, any python library you'll install using pip will be installed solely in this isolated environment.
Every time you'll need to work with libraries installed in this environment (i.e. work on your project), you'll have
to activate it. 

Once you're done working on your project, simply type `deactivate` to exit the environment.


### 2. Download and install the latest release
Latest release: 
[ ![](./doc/icons/download-flat/16x16.png "Click to download the latest release")](https://github.com/nchenche/cusProSe/releases/latest/)

#### Uncompress the archive

If you downloaded the *.zip* file:
```
unzip cusProSe-x.x.x.zip
```

If you downloaded the *.tar.gz* file:
```
gunzip cusProSe-x.x.x.tar.gz | tar xvf
```

#### Go to the cusProSe directory
 
```bash
cd cusProSe-x.x.x/
```

#### Install 

```python
python setup.py install
```

or 
```python
pip install .
```


## Quick start

If the installation was successful, typing:
* `run_iterhmmbuild` should display:
<pre>usage: run_iterhmmbuild [-h] -fa [FA] -protdb [PROTDB] [-name [NAME]] [-out [OUT]] [-id ID] [-cov COV] [-cval CVAL] [-ival IVAL] [-acc ACC]
run_iterhmmbuild: error: the following arguments are required: -fa, -protdb</pre>
* `run_prosecda` should display:
<pre>usage: run_prosecda [-h] -proteome [PROTEOME] -hmmdb [HMMDB] -rules [RULES] [-out [OUT]] [-cov COV] [-cval CVAL] [-ival IVAL] [-score SCORE] [-acc ACC] [-pdf]
run_prosecda: error: the following arguments are required: -proteome, -hmmdb, -rules</pre>


### run_iterhmmbuild
This tool allows you to build an HMM profile representative of (a) seed protein sequence(s)
 by using a set of other protein sequences to iteratively feed the HMM profile.
Two inputs are thus required in a fasta file format:
* seed sequence(s)
* a set of sequences

Input examples are available in `cusProSe-x.x.x/iterhmmbuild/datas/`

The command below will learn and build an HMM profile describing the seed sequence in A.fa by learning iteratively from
the set *magnaporthe orizae* proteins:
```
run_iterhmmbuild -fa A.fa -protdb mgg_70-15_8.fasta
```

An output directory will be generated in a generic format: 
`iterhmmbuild_year-month-day_hour-min-sec/`

This directory content will be like the one below:

<pre><font color="#3465A4"><b>iterhmmbuild_2020-10-29_13-13-04/</b></font>
├── A.hmm
├── A_seed.clw
├── A_seed.fa
├── info.log
├── <font color="#3465A4"><b>iter_1</b></font>
│   ├── A_enriched_nr.fasta
│   ├── A_nr.clw
│   ├── A_nr.domtblout
│   ├── A_nr.fa
│   └── A_nr.hmm
├── <font color="#3465A4"><b>...</b></font>
│  
└── <font color="#3465A4"><b>iter_6</b></font>
    ├── A_enriched_nr.clw
    ├── A_enriched_nr.domtblout
    ├── A_enriched_nr.fasta
    └── A_enriched_nr.hmm
</pre>
 
with:
<table>
<tr>
    <th>File name</th>
    <th>Description</th>
</tr>

<tr>
    <td>A.hmm</td> 
    <td>Final HMM profile</td> 
</tr>

<tr>
    <td>A_seed.fa</td> 
    <td>Final sequences used to build A.hmm</td> 
</tr>
<tr>
    <td>A_seed.clw</td> 
    <td><span>Multiple alignment (clustal W format) of A_seed.fa</span></td> 
</tr>
</table>


The content of *iter_i* directories is described in section xxx (TODO).


### run_prosecda

This tool allows you to detect in a proteome proteins matching specific given domain architectures
rules. 

Three input files are required:
* a proteome file (fasta format)
* an HMM profile database
* a file describing the rule (yaml format)


#### Creating rules
The first requirement to run prosecda is to have a file containing the rules that describe protein *families*
based on user-defined specific domain architecture.
To do so, rules must be written in a specific yaml format (that will be described/changed later). The simplest way
is to use a simple GUI (interface) accessible by typing `create_rules`

##### With Graphical user interface
![](./doc/prosecda/images/gui_rules_1.png)

As shown in the above image, a rule is defined by different features:
* `Name`: category/family name the proteins that'll match the rule will be assigned to
* `Comment`: optional feature; can be used to describe the rule
* `Mandatory list`: list of domain names the protein must contain
* `Forbidden list`: optional list of domain names the protein must not contain

In order to add mandatory/forbidden domain name into its proper list:
* type its name (in `Mandatory` or `Forbidden`)
* optionally add a threshold score value the domain must match the protein sequence (3.0 by default)
* click on `insert`

Once your rule is defined, click on `Add rule to the list`. Repeat the procedure to create and add rule to the list.

Once all your desired rules are defined, save them in a yaml format by clicking on `Save rules`.

This yaml file will look like below:

```yaml
PKS:
 COMMENT: Polyketide Synthase
 CONDITION:
  mandatory:
  - KS
  - AT
  - PP-binding, 15
  forbidden:
  - C

PKS-like:
 COMMENT: Polyketide Synthase like
 CONDITION:
  mandatory:
  - KS
  - AT
  forbidden:

PKS_type3.0:
 COMMENT: Polyketide Syntase type III
 CONDITION:
  mandatory:
  - CHS_like
  forbidden:

```


#### Running prosecda

Input examples are available in `cusProSe-x.x.x/prosecda/datas/`

The command below will search in the *f. fujikuroi* proteomes all proteins matching the rules defined in rules.yaml
from the HMM profile database databaseKGall_terpenes_selec.hmm:
```
run_prosecda -proteome fusarium_fujikuroi_IMI58289_V2_protein.fasta -hmmdb databaseKGall_terpenes_selec.hmm -rules rules.yaml
```

An output directory will be generated in a generic format: 
`prosecda_year-month-day_hour-min-sec/`

This directory content will be like the one below:

<pre><font color="#3465A4"><b>prosecda_2020-10-29_15-55-24/</b></font>
├── fusarium_fujikuroi_IMI58289_V2_protein.domtblout
├── info.log
└── <font color="#3465A4"><b>matches</b></font>
 </pre>

with:
* fusarium_fujikuroi_IMI58289_V2_protein.domtblout: output file of hmmsearch
* matches: directory containing different output files for rules matching proteins

The content of `matches` directory is as follow:

<pre>
<font color="#3465A4"><b>matches</b></font>
    ├── <font color="#3465A4"><b>DMATS</b></font>
    │   ├── XP_023429775.1.fa
    │   ├── XP_023429775.1.xml
    │   ├── XP_023436063.1.fa
    │   └── XP_023436063.1.xml
    ├── DMATS.pdf
    ├── <font color="#3465A4"><b>Ent_kaurene_synthase</b></font>
    │   ├── XP_023431478.1.fa
    │   └── XP_023431478.1.xml
    ├── Ent_kaurene_synthase.pdf
    ├── <font color="#3465A4"><b>NRPS-PKS</b></font>
    │   ├── XP_023427367.1.fa
    │   ├── XP_023427367.1.xml
    │   ├── XP_023429959.1.fa
    │   ├── XP_023429959.1.xml
    │   ├── XP_023434892.1.fa
    │   ├── XP_023434892.1.xml
    │   ├── XP_023435338.1.fa
    │   └── XP_023435338.1.xml
    └── NRPS-PKS.pdf
</pre>

with:
* DMATS, Ent_kaurene_synthase and NRPS-PKS: subdirectories containing output files for proteins matching the given rule
  * protein.fa: protein sequence in fasta file format
  * protein.xml: informations about the protein and its domain(s)
* pdf files: graphical representation of the most likely domain architecture of the protein


Example of the output pdf file for XP_023431478.1 in NRPS-PKS:
```xml
<protein>
  <id>XP_023431478.1</id>
  <sequence_length>952</sequence_length>
  <class_name>Ent_kaurene_synthase</class_name>
  <domain_architecture>
    <domain name="ent_kaurene">
      <cval>0.0</cval>
      <ival>0.0</ival>
      <score>1074.3</score>
      <start>10</start>
      <end>952</end>
      <domain_length>943</domain_length>
    </domain>
  </domain_architecture>
</protein>
```

Example of the output pdf file for XP_023431478.1 in NRPS-PKS:
![](./doc/prosecda/images/xp_023427367.1.png)


## More later...