# ProSeCDA usage guideline

This tool allows you to detect in a proteome proteins matching specific given domain architectures
rules.

## Inputs
Three input files are required:

* a protein database in a fasta format the user wants to scan to identify proteins of interests
* an HMM domain profile database use to annotate proteins 
* a YAML file in which proteins of interest are described based on the presence/absence of specific domains


### Rules creation to model proteins of interest
The proteins the user is interested in must be described in a file containing simple rules defining for each protein of interest which domains are mandatory and/or which one are forbidden. An E-value (corresponding to the independent domain E-value from hmmsearch) can also be specified for each mandatory domains. In that case, a mandatory domain must match a sequence with an E-value at least below the one specified. If no E-value is defined for mandatory domains, an E-value of 0.01 is used by default.

#### Edit rules from GUI
The file in which rules are edited must respect a specific syntax in a YAML format. To make it simpler, a Graphical User Interface (GUI) has been implemented. You can access it through the command `create_rules`


<figure class="fig-prosecda">
    <img src="./prosecda/images/gui_rules_1.png"
      alt="Graphical User Interface to edit rules.">
    <figcaption>
<b>Figure 3: Graphical User Interface to edit rules</b> 
    </figcaption>
</figure>

As shown in the above image, a rule can be defined by five different inputs:

* `Name` (required): category/family name the proteins that'll match the rule will be assigned to
* `Comment` (optional): can be used to describe the rule
* `Mandatory` (required): domain name the protein must contain
* `E-value` (optional): minimal E-value the associated domain must match a sequence (0.01 if not specified)
* `Forbidden` (optional): domain name the protein must not contain

Once you have added all your mandatory/forbidden domains describing the domain architecture your proteins of interest must match, click on `Add rule to the list` to validate the rule. You'll see it listed in the 'Rule list' panel. Repeat the procedure to create as many rules as you want. 

Once all your desired rules are defined, click on `Save rules` to save them in a YAML file. This YAML file will look like the one described below:

```yaml
PKS:
 COMMENT: Polyketide Synthase
 CONDITION:
  mandatory:
  - KS
  - AT
  - PP-binding, 0.0001
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

## Running ProSeCDA
Input examples are available in `cusProSe-x.x.x/prosecda/datas/`

The command below will search in the *f. fujikuroi* proteomes all proteins matching the rules defined in rules.yaml from the HMM profile database databaseKGall_terpenes_selec.hmm:

```bash
run_prosecda -proteome fusarium_fujikuroi_IMI58289_V2_protein.fasta -hmmdb databaseKGall_terpenes_selec.hmm -rules rules.yaml
```
<br>
Help about the usage of ProSeCDA and its parameters can be shown with the following command: `prosecda -h
`:
<pre class="parameters">usage: prosecda [-h] -proteome [PROTEOME] -hmmdb [HMMDB] -rules [RULES] [-out [OUT]] 
                [-cov COV] [-cevalue CEVALUE] [-ievalue IEVALUE] [-score SCORE] [-acc ACC]
                [--nopdf]

Search proteins matching rules.

optional arguments:
  -h, --help            show this help message and exit
  -proteome [PROTEOME]  Proteome file (.fasta)
  -hmmdb [HMMDB]        HMM profile database
  -rules [RULES]        Rules&apos;file (.yaml)
  -out [OUT]            Output directory
  -cov COV              Minimum ratio between the length of the HMM profile stretch that 
                        matches a sequence and the overall length of the HMM profile (0.0)
  -cevalue CEVALUE      HMMER conditional e-value cutoff (0.01)
  -ievalue IEVALUE      HMMER independant e-value cutoff (0.01)
  -score SCORE          HMMER score cutoff (3.0)
  -acc ACC              HMMER mean probability of the alignment accuracy between each residues
                        of the target and the corresponding hmm state (0.6)
  --nopdf               Deactivate the generation of the pdf results (False)
</pre>

## Output of ProSeCDA
### Global architecture
An output directory will be generated in a generic format: 
`prosecda_year-month-day_hour-min-sec/`

This directory content will be like the one below:

<pre><b>prosecda_2020-10-29_15-55-24/</b></font>
├── fusarium_fujikuroi_IMI58289_V2_protein.domtblout
├── info.log
└── <b>matches/</b></font>
 </pre>

with:

* `fusarium_fujikuroi_IMI58289_V2_protein.domtblout`: output file of hmmsearch
* `matches/`: directory containing different output files for rules matching proteins

The content of `matches/` directory is as follow:

<pre>
<b>matches/</b></font>
    ├── <b>DMATS/</b></font>
    │   ├── XP_023429775.1.fa
    │   ├── XP_023429775.1.xml
    │   ├── XP_023436063.1.fa
    │   └── XP_023436063.1.xml
    ├── DMATS.pdf
    ├── <b>Ent_kaurene_synthase/</b></font>
    │   ├── XP_023431478.1.fa
    │   └── XP_023431478.1.xml
    ├── Ent_kaurene_synthase.pdf
    ├── <b>NRPS-PKS/</b></font>
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

### PDF files
Example of the output pdf file for XP_023431478.1 in NRPS-PKS:

<figure >
    <img src="./prosecda/images/xp_023427367.1.png"
      alt="IterHMMBuild pipeline overview.">
    <figcaption>
<b>Output</b> 
    </figcaption>
</figure>

### XML file
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
