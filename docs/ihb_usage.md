# Usage
Two inputs are required for IterHMMBuild, both in a fasta file:
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
