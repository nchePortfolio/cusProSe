# Usage guideline
Two inputs are required for IterHMMBuild, both in a fasta format:

* either a fasta file with at least one protein sequence OR a directory location where multiple individual fasta files are stored
* a fasta file of protein database used to enrich initial protein sequence(s) of interest

To guide the user, input data examples can be found in `cusProSe-x.x.x/iterhmmbuild/datas/`:
<pre><b>datas/</b>
├── inputs
│   ├── A.fa
│   ├── KS.fa
│   └── PP.fa
└── mgg_70-15_8.fasta
</pre>

All fasta files in the `inputs/` directory contain sequences of three different protein domains. There is also the *magnaporthe orizae* proteome (mgg_70-15_8.fasta) that will be used as the protein database for the examples below.


## Running IterHMMBuild
If you want to run IterHMMBuild in order to build an HMM profile representing the A domain, type in the terminal:
```bash
iterhmmbuild -fa inputs/A.fa -protdb mgg_70-15_8.fasta
```

If you want to run IterHMMBuild in order to build an HMM profile database representing all domains in `inputs/` type:
```bash
iterhmmbuild -fa inputs/ -protdb mgg_70-15_8.fasta
```

## Output of IterHMMBuild
After running IterHMMBuild an output directory will be generated in the following generic format: 
`iterhmmbuild_year-month-day_hour-min-sec/`

### Output content from a single fasta file used as input 
The directory content generated from `A.fa` used as input will be as follow:

<pre><b>iterhmmbuild_2020-10-29_13-13-04/</b>
├── A.hmm
├── A_seed.clw
├── A_seed.fa
├── info.log
├── <b>iter_1/</b>
├── <b>iter_2/</b>
├── <b>...</b>
└── <b>iter_6/</b>
</pre>

The three main files of interest are:
<table class="t-description">
    <tr>
        <td class="t-data"><b>A.hmm</b></td> 
        <td class="t-data">Final HMM profile</td> 
    </tr>
    <tr>
        <td class="t-data"><b>A.seed.clw</b></td> 
        <td class="t-data">Final sequences used to build A.hmm</td> 
    </tr>
    <tr>
        <td class="t-data"><b>A.seed.fa</b></td> 
        <td class="t-data">Multiple alignment (clustal W format) of A_seed.fa</td> 
    </tr>
</table>

`info.log` is a log summary of the computation. The subdirectories `iter_i/` contains files obtained at each iteration and are described in section <a href="./ihb_introduction.html#outputs">Overall procedure</a>.

### Output content from a directory with multiple fasta files used as input
The directory content generated from `inputs/` will be a list of subdirectories such as the output described above. You will find at its root the file `hmm_database.hmm`, a concatenation of the HMM profiles of protein domains used as inputs. 

<pre><b>iterhmmbuild_2021-03-02_12-39-38</b>
├── hmm_database.hmm
├── info.log
├── <b>A</b>
│   ├── A.hmm
│   ├── A_seed.clw
│   └── A_seed.fa
├── <b>KS</b>
│   ├── KS.hmm
│   ├── KS_seed.clw
│   └── KS_seed.fa
└── <b>PP</b>
    ├── PP.hmm
    ├── PP_seed.clw
    └── PP_seed.fa
</pre>

## Parameters of IterHMMBuild

<pre>
<code class="language-bash">
  -fa [FA]          Fasta file of sequence(s) used as first seed or directory containing such files
  -protdb [PROTDB]  Sequences used to learn the hmm profile (fasta format)
  -name [NAME]      Name for the HMM profile (fasta name by default).
  -out [OUT]        Output directory
  -id ID            Sequence identity threshold to remove redundancy in seed sequences (0.9)
  -cov COV          Minimum percentage of coverage alignment between hmm hit and hmm profile (0.0)
  -cval CVAL        hmmer conditional e-value cutoff (0.01)
  -ival IVAL        hmmer independant e-value cutoff (0.01)
  -acc ACC          hmmer mean probability of the alignment accuracy between each residues of the
                    target and the corresponding hmm state (0.6)
</code>
</pre>