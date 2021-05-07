var families = [
    {
        "name": "Chimeric_TS",
        "rules": {
            "mandatories": [
                {
                    "name": "N_ter_TCdom",
                    "evalue": 0.01,
                    "color": "sienna"
                },
                {
                    "name": "C_ter_PTdom",
                    "evalue": 0.01,
                    "color": "plum"
                }
            ],
            "forbidden": [
                {
                    "name": "None",
                    "color": "None"
                }
            ]
        },
        "proteins": [
            {
                "id": "MGG_01701T0",
                "sequence": "MPIVAAHAEHLDLYEAMNFSDSRVLDLGSQSTKIKDLVSTVILECMRVDRVCALRMLEAYRKRWQAIIETRDTDKIESLEEYLESRANNGSMGAYYAMLEFSLGIVITQEEYSLLAAPMRHWKRCMLLTNDYWSWLRARQQTKNQLVGRVVNTIWFLIKQNPTYTDEQAKSKVAEMVVAEEAKWVQSKNRLYAENPKLRDDLVKFLENLHTALAGNDYWSSQRYRHNDWTHVPTQPEPDHPRIHELAGFGRTLVVEESRILARPSSSSSPSHSLGASASSSSGWASSSSQGDLSSPLSSASSTFDNVDRDRLKHKVTKATTTTAATAEEVISAPIRYIQSMPSKGFRAALVDCYNMWLDVPQREMEIIKTVINCLHDSSLLLDDIEDDSKLRRGFPATHLVYGPAATINSATYLYVQAVQAVHNLGSRKLMDVLLLRLQQLFFGQSLDLHWTFNRECPTKTQYFNMIEQKTGAFLSLVAELMMVVSAASDYESSTDSPENIFQTFSYQSGLYFQVRDDYLNITSADYADKKGFAEDLDEQKFSYILVHLAHSRPDLMVQVEGIFKAMRSGKTENAETKKYLVSLLHKSGAVEATKELLVRWQDDIVKEIDVLENHFGKPNPSLRLLMQTLWIDA",
                "length": 635,
                "architectures_nb": 4,
                "domains": [
                    {
                        "name": "N_ter_TCdom",
                        "start": 8,
                        "length": 225,
                        "cevalue": 4.3e-21,
                        "ievalue": 7.9e-18,
                        "score": 64.2,
                        "hmm_length": 334,
                        "hmm_start": 133,
                        "hmm_end": 328,
                        "color": "sienna",
                        "status": "likely"
                    },
                    {
                        "name": "sesquiterpene",
                        "start": 8,
                        "length": 225,
                        "cevalue": 2.4e-18,
                        "ievalue": 4e-15,
                        "score": 55.0,
                        "hmm_length": 369,
                        "hmm_start": 172,
                        "hmm_end": 361,
                        "color": "blueviolet",
                        "status": "unlikely"
                    },
                    {
                        "name": "C_ter_PTdom",
                        "start": 251,
                        "length": 382,
                        "cevalue": 1.8e-94,
                        "ievalue": 2.3e-91,
                        "score": 306.2,
                        "hmm_length": 382,
                        "hmm_start": 33,
                        "hmm_end": 380,
                        "color": "plum",
                        "status": "likely"
                    },
                    {
                        "name": "paxC_like",
                        "start": 302,
                        "length": 282,
                        "cevalue": 1.4e-26,
                        "ievalue": 2e-23,
                        "score": 82.1,
                        "hmm_length": 338,
                        "hmm_start": 3,
                        "hmm_end": 266,
                        "color": "yellow",
                        "status": "unlikely"
                    }
                ]
            },
            {
                "id": "MGG_03432T0",
                "sequence": "MLSHEELYPYSEPVARETVVASGALTSLPVRIHRHDELADAGAICLTGDWGRIMKDGQDKKSNGSPCRVGNWGSFIWPESEPDRLGLLCYLLDVGCFHDDACEEMSIAAAHIEHMDLDAAMDVSDDRSLSADSRSAKTKDLVSTAILECVRVDRVGALRMLEAYRKKWLAIMENYDTEKIEALDEYFESRANNGGMGAYYAMLEFSLGIVVTDEEYAMMAVPIQHVERCMLLTNDYWSWPREREQAKTQEAGKVFNTVWFMMKQNPTWTEEQAKRRVAEMVVEEETKWVQSKDALYAQYPALSPHLVKLLENLHTALAGNDYWSSQCYRHNDWTHVPEQPAPGHPQVHELAGLGRAVMPLAESPEGSAADGVKTPLSEGKSGSPLTSPSSVFSSVVVEATKQPPVHSRAEEVIQAPIRYIQSMPSKGFRSALVDCYSRWLDVPAREMESIKSVINCLHDSSLILDDIEDNSRLRRGFPATHVVYGAGPAINSATYLYVQAVAAINSLDNREMMDVLLRQLQNLFLGQSLDLHWTANRQCPTRDEYLGMVGQKTGAFISMVAELMIAASNVNSPEKTRAAFAAFSHLSGLYYQVRDDYLNITSAEYADKKGFAEDLDEQKFSYMLVHLARARPDMMVQVEGVFRSMRDGKAEVAESKRYLVGLLRASGTVDATRKLLLGWQDAIVREIDALQAHFGAPNPSLRLLMESLWIE",
                "length": 712,
                "architectures_nb": 4,
                "domains": [
                    {
                        "name": "N_ter_TCdom",
                        "start": 7,
                        "length": 332,
                        "cevalue": 4e-34,
                        "ievalue": 7.4e-31,
                        "score": 107.0,
                        "hmm_length": 334,
                        "hmm_start": 4,
                        "hmm_end": 328,
                        "color": "sienna",
                        "status": "likely"
                    },
                    {
                        "name": "sesquiterpene",
                        "start": 63,
                        "length": 274,
                        "cevalue": 1.7e-24,
                        "ievalue": 2.7e-21,
                        "score": 75.2,
                        "hmm_length": 369,
                        "hmm_start": 109,
                        "hmm_end": 361,
                        "color": "blueviolet",
                        "status": "unlikely"
                    },
                    {
                        "name": "C_ter_PTdom",
                        "start": 358,
                        "length": 353,
                        "cevalue": 5.6e-94,
                        "ievalue": 7.3e-91,
                        "score": 304.5,
                        "hmm_length": 382,
                        "hmm_start": 49,
                        "hmm_end": 380,
                        "color": "plum",
                        "status": "likely"
                    },
                    {
                        "name": "paxC_like",
                        "start": 399,
                        "length": 264,
                        "cevalue": 3.6e-24,
                        "ievalue": 5.2e-21,
                        "score": 74.2,
                        "hmm_length": 338,
                        "hmm_start": 31,
                        "hmm_end": 265,
                        "color": "yellow",
                        "status": "unlikely"
                    }
                ]
            },
            {
                "id": "MGG_07506T0",
                "sequence": "MTVTTAMTATTKNHQDCGPMGYESSIPVPACLYENNAYPSRFRPRISKHNDVADKACWEACDDFENVTGLKLKADSVGCINPVSGNVNALWFPEAIPERLRIISYLSELLFRHDDLTDDAVTPEQFDEVHGPLARFLGSESKQSDHTTKHNAMNTMQARVAIEALEQDEGLGKLVIEKWKGIVSVRGQDAFMEHKTLDSYLHVRHYDAGAYSVWSQILFCCDVRLTDEELTGLEPLTWLAFTQMILWHDYCSWDKEAATYLEREEGGSNMSAVQVYMAMYSLDQHAAKDFLLSEIERIEDEYCTRKASYMAECSPAHHITHYIGLIEMCMAGNTLWHLSSRRYCPAAPLPRREDMGKVNLGPLDVSEVGMPVNGARSDSGILTPVSSRCGAERLRPFWNNQRTEYTTMTPAETSSDSKKKMNKAKASSSHHQTRADLLTVAPCAWPAEADEEDILAAYLYTAARPASGARDKLMDALDNWYRVPPETLATIRTIVRIMHNASLMLDDVHDNSPLRRGSPSAHIVFGTAQTINSAGYVTIKCVDLARRRLGDDALSCLLSELGQLHLGQSHDLAWTFHCRAPSMAGYYSHLEQKTGGLFRLAARMMRASATQNRHLDACGLMSLLGRLYQLRDDYQDITSETLSTYDDLDEGSFTLPLIHALEREDKHGGVQLRSILQSARAARSASAAASSDGARLPAETKLLVREILEEAGSLEYTRAVIRDLYDETRAALAALENEAGPGGKNWMLRLITFQLKM",
                "length": 758,
                "architectures_nb": 4,
                "domains": [
                    {
                        "name": "N_ter_TCdom",
                        "start": 20,
                        "length": 330,
                        "cevalue": 1.4e-26,
                        "ievalue": 2.5e-23,
                        "score": 82.3,
                        "hmm_length": 334,
                        "hmm_start": 3,
                        "hmm_end": 329,
                        "color": "sienna",
                        "status": "likely"
                    },
                    {
                        "name": "sesquiterpene",
                        "start": 80,
                        "length": 268,
                        "cevalue": 1.1e-23,
                        "ievalue": 1.8e-20,
                        "score": 72.5,
                        "hmm_length": 369,
                        "hmm_start": 112,
                        "hmm_end": 360,
                        "color": "blueviolet",
                        "status": "unlikely"
                    },
                    {
                        "name": "C_ter_PTdom",
                        "start": 388,
                        "length": 370,
                        "cevalue": 1.8e-84,
                        "ievalue": 2.3e-81,
                        "score": 273.3,
                        "hmm_length": 382,
                        "hmm_start": 39,
                        "hmm_end": 381,
                        "color": "plum",
                        "status": "likely"
                    },
                    {
                        "name": "paxC_like",
                        "start": 444,
                        "length": 245,
                        "cevalue": 9.5e-23,
                        "ievalue": 1.4e-19,
                        "score": 69.5,
                        "hmm_length": 338,
                        "hmm_start": 49,
                        "hmm_end": 248,
                        "color": "yellow",
                        "status": "unlikely"
                    }
                ]
            },
            {
                "id": "MGG_13405T0",
                "sequence": "MMDRRDIYPYSIPVDREEVTRSGALTTLPVRIHRHNHLADAGALCLVNDWRHTMKDGQETRSNGSPCVVGNWASFIWPESDPERLGLLTYLLDVGCFHDDACEEMTMASAHEEHLDLAGAMDVEDKRMLSKDSRSLRTKQLVSKAVLECIKIDRQGAMRMLEAYRKKWLRIMETYNTDEIDGIDDYFLARANNGGMGAYYAMLEFSLGISVSDDEYAAMAEPITHVERCMLLTNDYWSWPRERDQAEHQESGKVFNVVWFLMRKEQCSEADAMDRVRQLIHAEERAWTAAKERLYDQCPKLRPDLVRLLESLETALAGNDYWSSRCYRHHDWRHVAVRPVQDGPEIHELAGMGKALAMNLAADNDRTRSGASSPESSSSAAGSSSSHTAEMMPHSPLSSVKSTPTSATSEGSLPGMQAAPVFEPARYIRQMPSKNMRSQLMDCFNLWLEVPQPSLAAIKETIDCLHHSSLILDDIEDGSDLRRGLPAAHIVYGVGQAINSATHLHVQAVANMHAMASREGRPQMMDVFLHHLNQLFIGQSWDLHWTFHRRCPTEEKYLNMIDQKTGAMLQMLLELMQTAAAAAKQGVLKDGKHLLWEFTRLFGRFFQVRDDYMNTLSTEYERQKGFASDLNEQKLSYMLVHMFEVYPETRDKVEGVFNTMRRGGVSEGAVDVAKTYILSMMEETGTNNFTYKLLQKWHGQVLESIGALEKHFGVENGMLRLLVETLRV",
                "length": 729,
                "architectures_nb": 4,
                "domains": [
                    {
                        "name": "N_ter_TCdom",
                        "start": 7,
                        "length": 329,
                        "cevalue": 8.3e-37,
                        "ievalue": 1.5e-33,
                        "score": 115.9,
                        "hmm_length": 334,
                        "hmm_start": 3,
                        "hmm_end": 326,
                        "color": "sienna",
                        "status": "likely"
                    },
                    {
                        "name": "sesquiterpene",
                        "start": 56,
                        "length": 281,
                        "cevalue": 2e-24,
                        "ievalue": 3.2e-21,
                        "score": 75.0,
                        "hmm_length": 369,
                        "hmm_start": 112,
                        "hmm_end": 360,
                        "color": "blueviolet",
                        "status": "unlikely"
                    },
                    {
                        "name": "C_ter_PTdom",
                        "start": 350,
                        "length": 379,
                        "cevalue": 7.1e-88,
                        "ievalue": 9.2e-85,
                        "score": 284.5,
                        "hmm_length": 382,
                        "hmm_start": 29,
                        "hmm_end": 382,
                        "color": "plum",
                        "status": "likely"
                    },
                    {
                        "name": "paxC_like",
                        "start": 395,
                        "length": 288,
                        "cevalue": 2.7e-23,
                        "ievalue": 3.9e-20,
                        "score": 71.3,
                        "hmm_length": 338,
                        "hmm_start": 35,
                        "hmm_end": 266,
                        "color": "yellow",
                        "status": "unlikely"
                    }
                ]
            }
        ]
    },
    {
        "name": "DMATS",
        "rules": {
            "mandatories": [
                {
                    "name": "Trp_DMAT",
                    "evalue": 0.01,
                    "color": "olive"
                }
            ],
            "forbidden": [
                {
                    "name": "None",
                    "color": "None"
                }
            ]
        },
        "proteins": [
            {
                "id": "MGG_06540T0",
                "sequence": "MPLPGSTADLDLAYPPSPRSVPLGIRAATANNLIASFDQPHDPEQKWWWSRCAPLFYTILNASGSYTPEQMAEHMRVVRDVVIPSLGPRPSKAAAKGLITLDGTPFEPSWNFTRGRSVVRYAFEPLWDTGSNPEEPFGGRQVPEFARVLSRVAAPDTHLGWFDQIWARWNVAGDEAARAKRALIAHGKPASARVPQLFLAFDHHGAERRLKSYHFPILKHLATGVSTEKLVLDMMTDLRPGGDELRAAAAKMKTFFDRTKYPAAAEMLSIDCVDPRTARVKIYARTQSNSLDTVRETMTLAGLQTDEQTMEGVARVAKFWHLLLDERGGMERGQNKELRVKATHHTGICFVFEIRPGSDRVSVKPQMPWCQTNGTDARGAENFAAVLKMFGWEDHVDRFEKGVMAAASL",
                "length": 410,
                "architectures_nb": 1,
                "domains": [
                    {
                        "name": "Trp_DMAT",
                        "start": 47,
                        "length": 353,
                        "cevalue": 1.4e-122,
                        "ievalue": 6.2e-119,
                        "score": 396.7,
                        "hmm_length": 350,
                        "hmm_start": 1,
                        "hmm_end": 350,
                        "color": "olive",
                        "status": "likely"
                    }
                ]
            },
            {
                "id": "MGG_10953T0",
                "sequence": "MLTAQQQPLHTHLGTVAKCERSISKRQASREILREVARQAMHNNVLESPLSTKIHHNPQPSIAPRAKPLDRSTPWSSINALMRFNSKDHQFWWNTTGRFFATLLEQAGYSATEQYRELFFYAMHVAPELGPAPDSQGNVQRWRSPGTPDSTPIDFSWEWGLDGNGVVRYSFEPIGPNAGTPLDPLNSHATEDWINRLDRQGLVQGLDLEWYKYFTKTLLFAPEDDSRTSKTTEDFIEETTPRAGTVVALDLEKRGPVMKIYIYPGLKAAEMGIDALELVARSIRGLPPAQYASLRDNVEPLLEYLQGRGAQKWGFETGILSIDLLDPAEARIKIYVRAPHTSVEYLMDALTLGGKLDLSEAGGYSKKALADLVDFWNMLLGDSPDELPPDHPGRARPGFYYTVKAGRPVSPKVYVSPFWFVKSDKEVMQRMRNYLSTREDEPDMLGQMARYEGALESYL",
                "length": 460,
                "architectures_nb": 1,
                "domains": [
                    {
                        "name": "Trp_DMAT",
                        "start": 91,
                        "length": 361,
                        "cevalue": 4.2e-120,
                        "ievalue": 1.8e-116,
                        "score": 388.6,
                        "hmm_length": 350,
                        "hmm_start": 1,
                        "hmm_end": 342,
                        "color": "olive",
                        "status": "likely"
                    }
                ]
            },
            {
                "id": "MGG_12480T0",
                "sequence": "MGASKYNLSPDQQYWWQFVEPSLSSMLEYAGQYTPEEQDSHLEWYATQVTPIFGIQPSEETPDPNPFTHDSSPCHISINWCSKGKPTVRSGMTRPHDVFNSQAFVDELQPAMETSDQPDRAIFDGLAKSLFLKDPQEIAKVKAVVPPHLHTRIPNIGIAWDLVGAKRKLKLYHNPQAKKLATSRTGNDIIVSSIRALANDGYNYNEAMDVLERYVTELNPEKLELIIIGMDAAEPTLPTTRIKPYGIVAEANSWETVKNIYTLGGQVLNQERKQGLDILRSIWDLMRCHRGQRLADDYHMPKNDSSSTRGVLTPSFEVKPGQSLPDVKVYVSQWQFAKTDREIAECTVEIFKRLGWQKEADSYFNLLQKALSMKIPGRAVGEVATNGKLFEGKYTGWPAHLDSA",
                "length": 405,
                "architectures_nb": 1,
                "domains": [
                    {
                        "name": "Trp_DMAT",
                        "start": 14,
                        "length": 350,
                        "cevalue": 1e-109,
                        "ievalue": 4.4e-106,
                        "score": 354.5,
                        "hmm_length": 350,
                        "hmm_start": 1,
                        "hmm_end": 350,
                        "color": "olive",
                        "status": "likely"
                    }
                ]
            }
        ]
    },
    {
        "name": "Ent_kaurene_synthase",
        "rules": {
            "mandatories": [
                {
                    "name": "ent_kaurene",
                    "evalue": 0.01,
                    "color": "lightsteelblue"
                }
            ],
            "forbidden": [
                {
                    "name": "None",
                    "color": "None"
                }
            ]
        },
        "proteins": [
            {
                "id": "MGG_01949T0",
                "sequence": "MKRAKSVPAMASPTLKLAAKGLIARLSSINDPKYAFSTASVEIYDTAWVAMVTKRSGEQKRWLFPESFYHLLKSQADDGSWGYHPQTKASGVLGTGAAVLALYKHLKEPLQLHDVSSEEIRKRIILGSESLRTQLQNWDDVLSTNHIGIEIVAPALLDYLKQEDPALDFEFPAQAGLREMNAQKMSRFKPEHLYEAKVSTAAHSLEAFVGKIDFDRVRGHLWRGSMMASPSSTAAYLMYASVWDDEAEGFLQHVLKAGAGHGDGSMPGTFPTSYFEYSWTVVTLLQGGFSITDLGVKELNIIADHLEAGFKEEGGIIGFAPRAPDADDTAKGLLALDLLGRHLSPDRMIKVFEGRNHFTTFGSERDPSLTSNCHILLALLQQPDVAKYYPQIIKTANFVCEYWWSSDRRIRDKWHLSHMYPTMLMAEAFTELLRHFDNGTYPKAADGQLIWRVCICLFQACHRTLLEQGEDGSWEGMPEQTSYAILALAQARKLSLFDGLGKQVQAAIDRGAHYLKTRKVGHHDASWTSKSAYRVAIVAEAYELAALNVQKATRDGAPAVGRSIELPISGPRLDGYVDLVAKTPLFSDVPQWQLRASLVEASLFVPLLRDRRLSVFSRDEFDASEDKYLEMIPFTWVSCSNRGGSFMATSWLYDMMLVSMLSYQADEFIHKSAAPALRGISALSRLIDGVFDELASESKHVNGKSSSSSSSSSSSTTTTTTTTSEVEKKVRAELLRFVGHLLGHPSLARSSHWDLEALRRELRACLQANVAQIEENSRLAKHPSSPVLHTRARRTFFDWVRTTASDRTAIAFPFYFACCHFSSSQTPGEDVFATAAEKYLVDAAIRHLATKGRLMNDFGSTGRDSAEGNVNSVHFPELQRCSAAAASSTPAAKKDVLKRLIEFEEHCCSRALELLSQACLDGHQRRESLHLQKRKVVMATVYRDVSELYGQLYMLKGAAELD",
                "length": 963,
                "architectures_nb": 2,
                "domains": [
                    {
                        "name": "ent_kaurene",
                        "start": 2,
                        "length": 961,
                        "cevalue": 0.0,
                        "ievalue": 0.0,
                        "score": 1717.5,
                        "hmm_length": 955,
                        "hmm_start": 1,
                        "hmm_end": 954,
                        "color": "lightsteelblue",
                        "status": "likely"
                    },
                    {
                        "name": "diterpene",
                        "start": 5,
                        "length": 958,
                        "cevalue": 0.0,
                        "ievalue": 0.0,
                        "score": 1570.7,
                        "hmm_length": 961,
                        "hmm_start": 2,
                        "hmm_end": 959,
                        "color": "aquamarine",
                        "status": "unlikely"
                    }
                ]
            },
            {
                "id": "MGG_14722T0",
                "sequence": "MGSLTFPETANADREAALLTQHLLDNYDSVHGAGFMSCTVYDTAWLSLVKKENVDGQQRWLFPECFQYILDNQQNDGSWEAYQSEIDGILNTAASLLALQRHSVNPLQIDVLSPGELCRRVELARAALERKLSCWNVSETTHVGFEIIVPTLLRLLDEEGISFQFEGKATLMEINAAKMSRFKPEYLYGKTQLTALHSLEALSGMIDYTKVAHHKTGGGFMGSPSATAAYLIGLPPSKWDNEAEGYLRHVLQRSPGKDSVPSAFPSTNFEFSWVLSTLLHAGFTEKQLGPAAREVANVLNRVFETENGVVGFVPSIMADADDTAKTLSALNMMGFRKPATRMIEDFETETHFRTYPSERDSSFSANCNVLLALLHHPAPSQHTSQIKKVAGFLCNKWWNTDGAIKDKWNLSPLYPSMLMVQAFVELLHLVEGGRLPLSILDEEVGIKYAIAIYRSCVQAIQEQDDETGSWSDSVEITGYAVVLLSMAAQVMFVDPIRPELLNAVRRGCEYLQPKQSPSGDYLWIEKVTYGSPVLSQVYRLAALKLSSSIAPTSHIGRILNIPTSSPRAESFIKLYKATPLFSTTPEWKLRSAMAEGSLFLPLLKRRRDDVFTREAMTEDKYLEMIPFTWTACDLRAKSGASPSFLWEMMHISMLSYQGDEYMESVAAPAFAGDMDSLRHIVHNLIPGIANGIGHGGSYSDSEGTIQRVKDSTGRDAALKPLKCFVDFIMNHWAVVASSPADRASMSRELQGYLLAQIQQLEDNGQLAQAAKQPANLAFNVPFSLWVRTTSADHSSAPCYFAFVACLLTSIVAPPSNGNAGDCFQTVEQKYFAAAANRHLATMCRMYNDYGSVSRDAAESNLNSLDFPEFSACGAESPKASLFSLAQYERACLEDSLSRLEKECNRGSGGACQKATQMRRMTYWRLFCDVTDLYGQIYVIRDMSSNVKKAAAANM",
                "length": 955,
                "architectures_nb": 2,
                "domains": [
                    {
                        "name": "ent_kaurene",
                        "start": 1,
                        "length": 947,
                        "cevalue": 0.0,
                        "ievalue": 0.0,
                        "score": 1722.0,
                        "hmm_length": 955,
                        "hmm_start": 1,
                        "hmm_end": 955,
                        "color": "lightsteelblue",
                        "status": "likely"
                    },
                    {
                        "name": "diterpene",
                        "start": 4,
                        "length": 944,
                        "cevalue": 0.0,
                        "ievalue": 0.0,
                        "score": 1604.4,
                        "hmm_length": 961,
                        "hmm_start": 2,
                        "hmm_end": 960,
                        "color": "aquamarine",
                        "status": "unlikely"
                    }
                ]
            }
        ]
    },
    {
        "name": "NRPS",
        "rules": {
            "mandatories": [
                {
                    "name": "C",
                    "evalue": 0.01,
                    "color": "navajowhite"
                },
                {
                    "name": "A",
                    "evalue": 0.01,
                    "color": "darkorchid"
                },
                {
                    "name": "PP-binding",
                    "evalue": 0.01,
                    "color": "maroon"
                }
            ],
            "forbidden": [
                {
                    "name": "KS",
                    "color": "peru"
                },
                {
                    "name": "AT",
                    "color": "mediumseagreen"
                }
            ]
        },
        "proteins": [
            {
                "id": "MGG_00022T0",
                "sequence": "MGSIDDSELILSHQGLSASNHDQVSDRTTAFWRQKFEGLEASVFPTLPSSGIDVLRPERQSEHFVSYDTAVAADLEPAVQAFIPRAALAVLLSRYSNSSEALFGIAINQPHPVANDPKQSAGTRPEWLLVPTRINCDSDLKGADLLRHVAADDAAIQEFNASTLDLESIRHMSEYGSVACGFQTVLRVVVTGQTDAQAAASAGATTGALGIASDRALLIDCYMGIGSTFIRAQYDDRAIDGLQVARVLRQLGLLIEQLQTGSVQLPISKLNATTPSDLEEISSWNSTPMQKNEICIHDYALAYGRKFPDAIAISSWDGEWTYAQLDKVTSDLADHILTLGEVEVGQVVALCFERSKWTVAAMLAVNKAGLAFTLVDPSLPPARIANMCEQTSAKLAFTSQSNWATLNAIVDRCIVLDQEFVERIPQTPEDSGSRKLKQQTRKPQPSDLAYVIFSSGSTGEPKGSMVAHWSFTSSASELFPALGLDHTTRTIQFASYAFATSLVETFATLGHGGCVCIPSADERINDTAGFINRSKANWAIFTPSFISSLRPEDVPSLTTLVVGGEPLSTATRDAWASKVRLFNGYGLSESSGMAAVHRVQPAVPEPHIITRTVCLRIWLTDPNDVGKLAPVGAIGEITVETPCLALGYLPSSSAEARSRFLQEAPKWRRERGAPYEAEPFRMFRTGDLGRYKSDGSIVYLGRSDLQVKIRGQRVEMGDVETNLRRFLPSDTPIPIVEAIPRPDGRMTLVAFLTGPLGKGDKERTEETYVIADSAARQSITSKLLKVLPQYCVPTHFIRLKELPKTVTGKTSRKDLRAIGARLLSTAAQEGSAIVAIPEPNGDLGSEKAIALRRAWSQAFDLNPQVPVSDSVNFLDLGGDSITAIKLVNLAREQGVTLKVTDLMRGATLASLADKVQRQVGAATAAASRIPVMAATHEGPVQQSFAQGRMWFLHQLNPDSTWYLTPVAMRLRGTLRIDALEAALNAIEERHETLRTTFEDKDGLAIQVVHPMRHKKLRIVDVDEATLAATLREEQTKVFDLTSDPAWRVCLFRVVDDDNVISIVMHHIISDGWSMDILRQELAQLYSAAVMGPLNSPLPPLPLQYWDFSVWQRQPEQTVKQRKQLEYWKGQLTDSSPAELLLDRPRPTMPSGRAGVIDLSIQGRTYKQVIEFAKLHRTTPFAVMFAAFRAAHYRLVAAEDATIAVPTAARTHAELEPLIGFFVNTLCIRTFVDGDQDNFESLVRNQVHPAIMAAFDNQDVPFEHIVNAVLPAAERDTSRNPLAQLSFVMHSGPDIGTLQLEGVEVEPVTGGLAGVGSTTRFDLEMHLFHRQQDKKITGHAMYATDLFERETAQALVDVFQEVLRQGLAQPRTPISVLPLVEIPGLSIFDIEPTPYPRDSSIVDIFRQQVAAFPDAIAACDSAGRMTYSELDDKSDKLAAWLRHRGIPAETPVGILSPRSCQTLVAMIGVLKANLACLPLNVDYSTTRIKHMLSSAKLVNTKTQPTAEYGGRSLVLLGSKVSLPKGLDDLPDTEIVAIEDALKSAHEKGLTATDSGNPTATSLAAIIFTSGSTGKPKGSMLEHRSIVRLVKDSNVVAKVPPAAAVAHVANISFDVSMWEMYTPLLNGGTVVCIDYLTTLDIPALAQVFARERVSAALLSPVLVKQILQRMPSMLAGLEVLILSGDRFDVRDAKQARALVANLYNSLGPSECCVLNVIYRIDEEDELASGVVPLGRPVSNDGLVVMDSQQNPVPAGVMGELVVFGDGLSRGYTNSALDKNRFIHIDLESRGLTRAYRSGDRVRVSPKARQIEFFGRMDMQVKIRGHRVEPAEVEQVMLALPVVRDAVVVVRQGEDEGEKELVAFVVADDKAVAQQTQQQDQGKKQLGDSSQVEEQVKGWSEHFDVGLYTELSTVQASAIGRDFLGWKSMYDGSAIPLDEMTEWLDDTMRTILDGHRPAGHVLEIGTGSGMILFNLGQGLKSYAGLEPSETAATFVNKTIDSIPTLRGKAQVHVGTATDASRILQCQGSSPSSMPELVILNSVVQYFPTIDYLADVMETLTSMPGARRIVLGDLRSYPLNRQFLVSRALRSLGRGEAATKAAVRRKVMELEDREEELLVDPAFFTALAKRFSSRVSHVEILPKVMRATNELSAYRFAAVVHVREAEQGADDKTSSESAGSDLIDINAAQWVDFSASGMDRESLVRLLKESAAAGRTSPSDDSPPLVAVCNIPNSKNIAEGHLVKVLEGENGQGAGEEEDDESEDWVALARSRAESSTSLSAADLVELAQEAGLRVGLSWARQRSQQGGIDAVFYRDSRNVRFRFPVDGDTTASGSQSLPLANRPLQRQEHRRIVASINESIRTILPSYMVPAQIVVMAKMPFNPNGKVDRKALRSMAHVVPKTQTAGERVEPRNEVEAILCEEFSDVLGVQVGVSDNFFTAGGHSLLAQRLAARLSSRLDTRVSVKNVFDRPVVGQLAAIIRRGSTPDEPIPSLGHRQPTELSFGQNRLWFIEQVNPDASVRIPLAVHLSGPLNMEALESALASLQERHETLRTTFKQSDDGVAMQFVHPASELKTTLKVVDMTTWQNQVPAGALDKEKAPSSTLTQAIKDMQNQPFDLSSEPAWRSSLLRYGPEDNVLVIILHHIIYDGGSIEILTRELELFYAAALRSQDPLSTVEPLPIQYRDFAAWQKQGAELAKHERQLEYWSKTLHDSTPAELFTDFHRPAMLSGRADIVPFVIDGPLYDRLRTFSRTHQITTFATLLAVFRAAHYRLTGAADATIAMPISNRSRPELENLMGFFVNTLCIRIPVGGHQTFAELAQQVRNTTTASFSNQDVPFERVVSTMMPGSTDMSRNPLAQILFAVHSQQDLGKIKLEGLASESLPLTAITQMDVEFHVFQEVGRLKGQVMFSTDLFRAETISNLVLNFKEVLRRCLDDTQLSLAAIPLTDGVPRLDKLGMLEPQMNDYPRDSNVVEVFRAQVAKKPSATAVTDLSYSLTYQQLDEQSDRLASWLRRRHLAPEALVAVLSPRACETVVAFLGVLKANLAYIPLDVNAPPGRIDTILSCVPGSKLVLLGAQVPQSSELKAIANVELVRIGDAVESGEHEAGDQNLNLDMAGPSATSLAYTIFTSGSTGKPKGVMLEHRAILRIALDSNLCDYFPESPVVSNVCNLGFDVSVQEIWTALLRGGTLVCVDHFTLLDSRQLEEVFMKNKVSVAILTPALIRQCLTHAPDIIRRLAVLISVADKMDPGDAMKASKLVSRAVLNGYGPTENGMLSTIYEVDKTTVYPAGIPIGHAITNSGAVVMDSQQRIVSPGVIGELVVTGDGLARGYADPVLNRDRFVDVTIKGRLVRAYRTGDRVRWRPDDYEIDYFGREGQLLKIRGHLVEPAEVEAALLAAHEAVESAAVVGLSKPGSDTDLVGFIRLHGSDNRAAAAAAAASSIESQTLKALRMVLPTYMVPVRVVVLEEWPLNASGKLDRKQLGVMAENVSVERQSEAVERDYVAPSNEVEAALCQEFANAIGLTEMGVTHNFFELGGNSLGAMKLAARISRRFKTHITVKTIFDHPVPRDMASSLPQLDASTLVDGENGTGDDSDPPASQYESFQLCPVDDVQHFVKSEICPRLDHKYRDRVVDVYPASTTQGFYANDPPTGKPRSFNTFSVDFPAGADPSRVIEAFEAVMQHYDSLRTVIVRAQGRFWQVVLDRLEEPVETLELPEGETDFEPAVQQIIAADKQNPPNLGQAFIRVALLRTRDGPLRLMFRMSHAIWDGMSLGPFMKTFHSLYKDLAVPPSPRFALYLESLSKIREQGISHWSKVLQGSSVTVMQSIRESRKLMPVDRAAFMSRVVHIPPEAQAPLGGGITQATIFTAACATVIAKETNCSDLLFGNVVSGRQFLPTHLQNNLVGHCGNLMPVRIVGVDEGAEPRALVKQVQDQYLEGLAYEAITFDDIKENAGVEWRSDADRFGLATAFMNFEQHPESTIGDSTISIHHIPPEIRMRKSTVSGEDLLLILQPDPTTHDMEFVAFPEPDGRNFRLGVTANLRLCESGEVDHLIEKVCDAFVAMNKSLR",
                "length": 4068,
                "architectures_nb": 1,
                "domains": [
                    {
                        "name": "C",
                        "start": 5,
                        "length": 133,
                        "cevalue": 9e-12,
                        "ievalue": 5.3e-09,
                        "score": 35.3,
                        "hmm_length": 284,
                        "hmm_start": 169,
                        "hmm_end": 280,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 320,
                        "length": 492,
                        "cevalue": 3.8e-149,
                        "ievalue": 9.4e-147,
                        "score": 488.9,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 474,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 847,
                        "length": 69,
                        "cevalue": 7.5e-17,
                        "ievalue": 2.1e-14,
                        "score": 53.0,
                        "hmm_length": 70,
                        "hmm_start": 5,
                        "hmm_end": 69,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 938,
                        "length": 295,
                        "cevalue": 4.5e-70,
                        "ievalue": 2.6e-67,
                        "score": 226.6,
                        "hmm_length": 284,
                        "hmm_start": 3,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 1424,
                        "length": 478,
                        "cevalue": 2.9e-123,
                        "ievalue": 7.3e-121,
                        "score": 403.5,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 448,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 2317,
                        "length": 69,
                        "cevalue": 4.5e-10,
                        "ievalue": 1.1e-07,
                        "score": 30.3,
                        "hmm_length": 475,
                        "hmm_start": 435,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 2411,
                        "length": 67,
                        "cevalue": 5.5e-13,
                        "ievalue": 1.5e-10,
                        "score": 40.6,
                        "hmm_length": 70,
                        "hmm_start": 1,
                        "hmm_end": 70,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 2494,
                        "length": 315,
                        "cevalue": 3.9e-68,
                        "ievalue": 2.3e-65,
                        "score": 220.3,
                        "hmm_length": 284,
                        "hmm_start": 4,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 2994,
                        "length": 483,
                        "cevalue": 9.7e-127,
                        "ievalue": 2.4e-124,
                        "score": 415.0,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 3506,
                        "length": 68,
                        "cevalue": 4.8e-16,
                        "ievalue": 1.3e-13,
                        "score": 50.4,
                        "hmm_length": 70,
                        "hmm_start": 1,
                        "hmm_end": 68,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 3632,
                        "length": 285,
                        "cevalue": 8e-55,
                        "ievalue": 4.7e-52,
                        "score": 176.6,
                        "hmm_length": 284,
                        "hmm_start": 1,
                        "hmm_end": 281,
                        "color": "navajowhite",
                        "status": "likely"
                    }
                ]
            },
            {
                "id": "MGG_02351T0",
                "sequence": "MDESEKVEALAPSRRELDQIWHRNASVLDQMPGLVHDLISEVAAAQPGALAVCAWDGDLTYRQLDELSTSLARRLVGLGAAPRSTVPVLFPKSRWTSVAMLAVVKAGCSAVALDGTQPDSRLRSIVGQTRPPLVVAAAKYRGRAAGLAGGVPVVQLDDSFLEAGAGDAVAKLPAVSASDTVYISFTSGTTGQPKGACISHANVRSAVHYQGRDLGFSRESRVFDFAPYSFDVAWSNFLHTLCAGGCLCVASEDDMLADLSAAISAMGATLINITPTVLRTMRVVPPSLQSVLLSGETPYRENVTQWAGRVRLVNTYGPTECTFKCAFAEIDPAQQDRPHLGMGAAFALWIVDPADATKLAPVGSAGELYLEGPLVGQGYLADPDKTASAFVHDPPWLLAGSSTHPGRRGRLYKTGDLFRYDAQGNLLFVGRKDTSQLKIRGQRVEIGDVEHDVLSLDASCISTNDGFLRLGGDSISAMRVVAAARAEDMSITVADLFQRPTLAEVAEAARTRICSPDEQPVLPFTLLKGSRDPVSICEDVASLCGVASADVEDVYPCTPLQEGMLATSAKSAGSQTQSDATDYISRVAYELPAEIDLDEFKEAWARTVQRASIVRTRIVDIPSEGLVQVLIRRPIPLDRFSSVDEFLQTSTPMGLATPLCRSGVVVAKSSPRHLLLLEMHHAIFDGWVTKLIVEALESALVKSTPERPLAPFQPFIRHVLASDTPEAAAFWQNQLADSTAAQFPPPPPPSHQPCQKLDLSHAVRELQWARRSGITPSTVVRTALALLLASHTNSSEVVFGATVSGRTAPLNNIESIAGPTIATVPVRVRLDWDQTARALQRQVQQQALDTNRHEQYGLSRIRRINDEASRFQLLLVVQPGGRDRSYLFGQAKSIVRTADDAGSDDVQLVAKDGDMDSVGMHNPYAMMIICQLQSAGLVLRVNYDPGAVETAAVGRMCVQLEQLIRQLCDEQLAESTLRSISPITKQDLGQIWRWNRAVPKAAVGFVTSMIDEWATTNPDGLAVASWDRSLTYRQLRDLSEHLAYRLLHQGGGVGPGSLVVLNFDKSSWLVVCMMATLKMGATALPLSSPATTHRALEIIEAVQPKLVLTSGPAEESPFYTKVPTMSVSDLTPNEEWLHVPEPHTVTPSDPALVLFTSGSTGTPKSILWSHETLSSNICAARDSFGITAQSRVLQFAGYEFDVSTVESLAVLSAGGTLCIPSEADRTNRLGEAVTEFQASWVCLTPSVSETLDPRELSSLKTLVFAGEKLQRKTASRWVGTLEAVYNWYGPAEASVATCCLLQKSETCNSSPSPLTIGKSSSRGLVWLVDPKDRNLLSPIGAVSELCIEGPIVAQYAGQNSQRLNEESFFSPRWLQEGHEELEMSGREARLYQTGDLVRYDGCGRVVFIGRKHESQRKLRGQRVELGEIELRVHEFLAGRLEATVVAEIFCPDKSDKETLALFVSPLSLPDDADNVTDHLKRALPVDELEQALLESLPPHMIPKVYVPLAKMPTNHSGKTDRRRLRQMGSSIARAELAAMQPSRKAARQPSTAMERRLQQLWADVIGIEAGAIHAGDNFLRLGGDSITAMRLVASARHQGLALTVADVFRSPLLEDMAECVRKDCLLWGRESMGNPERLAVAWSATVANLPLLRTRIIDLPGQGLVQVVLDDLPLQPVDDLDAFLRRDQETPMGLGTELCRAAMVDRNFALTMHHCTYDGNTLKMILEELERQYLGRPGLSTTPFQNFIHHVGKMDKAKSAEFWKQQLSGSEAAQFPALPRATYKPQADQRLQHDIALTWPRAGVTPSTVARSAWALLAAQHTRCDDVLFAVTVSGRQAGMRGIESCAGPTICTIPVAVRIDWAETIGGFLARRQSAMAEATAHEQLGLQNIYRAAGDGLDPRHVQTLLVVQPVAEGRALDRDGLLFRARCFASSLDTLGVDPFNNYPLQVVCELRPDGMRLRVSFDAGVLDPLQVRRMAGQFETVLRQLCDEGMAAVRLGAIQTASDEDLAVFWAQNAQVPRGADALVHDSIALAARTQPGSTAVDAWDGRFTYRELDELSTQMAHALAGMGVVEGSVVAICSEKSKWVPLVQVAVYKAGGVTVLQSVAVPELRMAKVFERIGVKLAVVSESRLEVMSRHARCCTIDQLLRISSPDSQDKTQQPAALPLLRMSSPAAILVSSGSTGEPKQVLWSHGTLSSNAKAHGEYLGVDAGTRVLQFASYDFDVSTIETASTLVHAGCLCIPSEAERLDGLGGAINRLRTDFVNITPSTAKALRPEDVAGTLRTLVLSGENLAGEDVRRWKGTCPVLNWYGPAEHPATVLTASDESWYTGVIGQVCSRQPALCWLVDPEHPDRLVPFGTVGEIALEGPLGADGYVANDAMTRQRFHETPRFLAAGHGEVPGRQGRIYYSGDLGRYDSAGNLVYMGRKDAQLKIRGQLVAPEEVEAQIRTWLNDNNNNNNNNISNSNSNNNSKPEVVVDVVSRAGSKHTLVAYITAETAELELMTSALTTKLEATLPRYAVPSYYIPVPAIPTNASGKKDRKRLREIGSAYEPPRSTPASGRWEPTTTAERTLRELWSTVLKMDPEAISAGDSFLRVGDSIQAMRLVGLARQQGLVLTVADVFEHPVLEDMAKCVRNRVDKDGDDEDGVAPFTLLREGTDQQAVRREAAEACGVDEDDVQDVFPCTPLQEGLLALTIKSPGAYTGRNVLQLTPALDLDRFKQSWEGVCAMMPILRTRIVHLPDQGLVQVVIREKDCWWTDAADVEEHISKDQKTPMGLGSRLVRCAVISGAASESGQGCFYFALTMHHSVYDGLTMPVILEALENIYHGSTPLQPLPFQTFVKYIQERDKEAEATFWKSQFSGLEAAPFPSLPAPDYEPATDSQLTHHVADVSWRADDASPSTTLRAAFALLCSRYFSSADVVFGAVVAGRKAPVGGIERVVGPTIATLPVRVRLDAEATVLRLLEAVQRQATDMIPWEQAGLSSIRQLGEEASRACQFQTLLVVQPGAQQTFQEGGLFVSEAENQRSDSGAFDSYALSLVCTLEAGRLSLDFRFDSRVVDRDTIERAAHHLEHLVRRLCTSELDQTPLGEIALTTDRDLNQIWRWNAEDFARVDACVHDLVSQTARAHPQAVAVSAWDGEVRYHELDAVSTVLAARLVEMGVVRNTVVPLVFEKSMYGMVALLSVLKAGAGVLLLDSTLPESRLQAIITQTNPAVVVSSVANQDLTSRLVQPTTKTMPLGPDSYATLRGTTRTSDLPLQRCLDKLPRVAPSDLLYAVFTSGSTGTPKGCQIEHGSFCSAVVYQERVIAPLRPGARVYDLSSYSFDASIWMILRSLAAGATLCVPSEQERRDDLEGSMRRFRTTDVAMTPSTARLLHPPRLPTLRHLHVGGEAVTRADAARWTPFAAVFVGYGPSECNAAAVWYRVPAVDAPSPLPIGKGTGVSTWVLDPASSERLMPVGAVGELYLQGPLVGRGYLGDHETTAAAFIDSPGWLVRGSPDGSVPGRSGARLYKTGDLVRYNADDGSLVFLGRKDAQVKLRGQRIELGEVEHHLRQCLAAEFAEPSVAAEVVVPAATGSATLAAFVQIPAGERPRFQEAIRGLEDALKKRLPTYMVPSAYIPLEAIPLAPSGKTDRKALRGLGVGLTLEQLDGGGDDDENAEVTGLAIRLREMWAALLPVPIDKIRANSSFLRVGGDSISAMRLAALARTGGFSLSVANILRNPVLCKMAETMADLRQQDGDLENMAIPAFSLLKTTKDAALAVLTSQCRVEASQIQDAFPCTGVQKSLLSMTAKSEGSSYIARFLLRLRPGTDARRLRQAWEDVSRTAAPILRYRIVDLPREGLVQVQIDEALEWDAYESVEACLGRDGQRGMGLGDRLTRLALVQDEEGPCCVLTQHHAIYDGYSMDLLLDQVARAYAGTDDEGPLAPFQAFVKEYVVDANQQEARDFWRGQFAESEAVPFPALPSADYRPRADSTVKRHIGGLAWPKRNATASTVIRAAWSVLTSRYTDSHDVVFGAMVTGRQGSLPGIGRMIAPLINAVPLRVRLDPAARLEQLLDQLQSQAVAMIPHEHTEVLDIRRLGGPAEQASRFNTLLVVQPAGRPEYTAGGADGPFAAAPESLSSRDGLDDFNPNAVMVMCQLAGGGEVDIELSFDSGVIDPVQMARLAAQFEHVLRQFCSGGAASVRDVDLVSPQDLAEVWRWNAQVPAAVPRCVHELVEATARRQPEDCAVCAWDGSLLYSELEALSRRLALRLAALGVGRGTTVPLCFEKSVWYPVAALAVMRAGGACLAMDSTQPEARLRSIVQQVGPKLILSSASTEELASRLSDDAVVLSVDAHKIKQLPESTVDGDPSLPKTSPTDVLYIVFTSGSTGVPKGIVTTHQNFASAAAHQADMLHIRRGTRVFDFVSYNFDVSWSNHLQTLISGGCLCIPSESDRRNDIAGAFNRLRCDYSYFTPSVAKSLDPSALPGLRTLAMGGEPIQNTEVARWTSAQVETVIGIYGPAECAQALTFALLTPATRNNHVGRPYGANVWLVEPGRPDRLAGVGTTAELAIEGPTLSSGYFGDAAGSAAAYVETPAWLSHGAEGHAPRRGTVYMTGDLARYGADGSLDFIGRKDALVKLRGQRVELAEVEYHVAACLREGGPCVGIAAEIVTPKNGSSPILTVFLSVGDSETPKETEPQETEAKLVQILQDLEQLPDRVPQYMVPGAYISIPQIPMTTTNKTDRRALRELGGSKTLEELTRLQLRGRDRRAPDTPMERRLRDLWSAVLQIDPASIGADSSFLRIGGESIAAMRLVAAARAAGLSLTVAHIFKAPRLCDLALLVKEVGSGADEQIPRVRPFALLKTQDPEAFVARYIAPAVEGGRPAVQDVVPATDFQEQSVADALQDPPGRYPHWTFDLPTDVDFARLRQACVELVNHYDILRSVFVRAEGRLWQVVLASLDPAYDTIDAGDADMATLVNSVCEQDIKRPRVLGRSFIRFIAVKHASGRHKFIFRISHAQFDGFSWVSVLETLWSIYRGDPPAAGPSFTQYVAHAESTRAEAQSYWRSLLRGSPAPVGTRPNLPSAAAGSSSNLCSPANHLTVKETIAVRSSAQDRSRDGASLATLFHAACALVLARRHKLREVVFGRLVTGRSMLPGRLQEVVGPTMAEVPIRAVVEADDTVAAVAARLQAQFIEGAAHEAVGMVRIIEGCSGWAAEGVRDFGWRTAFQQPEDGRSSFLGRPSGVGFYEGAVPSRVRSEIYATPVHGDRLELEFEGNKRFVSEEDVREVFAGLRDALS",
                "length": 5286,
                "architectures_nb": 2,
                "domains": [
                    {
                        "name": "A",
                        "start": 59,
                        "length": 457,
                        "cevalue": 1.6e-137,
                        "ievalue": 4e-135,
                        "score": 450.5,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 405,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 445,
                        "length": 65,
                        "cevalue": 3.2e-17,
                        "ievalue": 9.1e-15,
                        "score": 54.1,
                        "hmm_length": 70,
                        "hmm_start": 12,
                        "hmm_end": 69,
                        "color": "maroon",
                        "status": "unlikely"
                    },
                    {
                        "name": "C",
                        "start": 553,
                        "length": 279,
                        "cevalue": 4.3e-77,
                        "ievalue": 2.5e-74,
                        "score": 249.7,
                        "hmm_length": 284,
                        "hmm_start": 1,
                        "hmm_end": 284,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 1030,
                        "length": 491,
                        "cevalue": 7e-137,
                        "ievalue": 1.8e-134,
                        "score": 448.4,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 1552,
                        "length": 69,
                        "cevalue": 2.8e-23,
                        "ievalue": 7.8e-21,
                        "score": 73.6,
                        "hmm_length": 70,
                        "hmm_start": 2,
                        "hmm_end": 70,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 1621,
                        "length": 241,
                        "cevalue": 2.9e-60,
                        "ievalue": 1.7e-57,
                        "score": 194.5,
                        "hmm_length": 284,
                        "hmm_start": 37,
                        "hmm_end": 284,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 2052,
                        "length": 491,
                        "cevalue": 4.1e-131,
                        "ievalue": 1e-128,
                        "score": 429.4,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 2570,
                        "length": 68,
                        "cevalue": 8.8e-19,
                        "ievalue": 2.5e-16,
                        "score": 59.1,
                        "hmm_length": 70,
                        "hmm_start": 3,
                        "hmm_end": 70,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 2683,
                        "length": 276,
                        "cevalue": 6.1e-84,
                        "ievalue": 3.6e-81,
                        "score": 272.1,
                        "hmm_length": 284,
                        "hmm_start": 1,
                        "hmm_end": 284,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 3144,
                        "length": 493,
                        "cevalue": 4.5e-154,
                        "ievalue": 1.1e-151,
                        "score": 505.1,
                        "hmm_length": 475,
                        "hmm_start": 2,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 3667,
                        "length": 68,
                        "cevalue": 4.5e-20,
                        "ievalue": 1.3e-17,
                        "score": 63.3,
                        "hmm_length": 70,
                        "hmm_start": 5,
                        "hmm_end": 70,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 3779,
                        "length": 273,
                        "cevalue": 1.5e-73,
                        "ievalue": 9.1e-71,
                        "score": 238.0,
                        "hmm_length": 284,
                        "hmm_start": 1,
                        "hmm_end": 284,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 4241,
                        "length": 489,
                        "cevalue": 2.1e-154,
                        "ievalue": 5.3e-152,
                        "score": 506.2,
                        "hmm_length": 475,
                        "hmm_start": 3,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 4761,
                        "length": 69,
                        "cevalue": 4.2e-21,
                        "ievalue": 1.2e-18,
                        "score": 66.6,
                        "hmm_length": 70,
                        "hmm_start": 2,
                        "hmm_end": 69,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 4875,
                        "length": 290,
                        "cevalue": 1.8e-64,
                        "ievalue": 1.1e-61,
                        "score": 208.2,
                        "hmm_length": 284,
                        "hmm_start": 1,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    }
                ]
            },
            {
                "id": "MGG_03401T0",
                "sequence": "MSAFIQPALGSPKPLLPRIDTTNTRYEHESNPKTFNSANESVEARLVWAIGDILGIDSTSIQMVDSFTDLGGCERTAARLSTTCRDLGLEVDSSDIMNCFTLAELQTRITPCSREVSPQNVPTSGSLAIQPLKLRTDNVAASQARYSVAPSTAISEVHFDHESFICDEESVSRAVIIKPRAGFFDGKQVVFLSLAGLQVPGTPTSDIEVIPQTKMFLAGTKVASIRHDLEAAAIATDLPDIWIVLRQLPVTEHGALDRRKLRTWLQNINQETYQHIMSLDTEETLQQPLTDSERALQKAVSNALQAPREEIGMNFSFAQLGGDEVSAMQVVARSKSDGIFLSATELLQNSSLAQLAAMATSRGEMPRGWDGEPEGEHFDLSPMQQLYFMTTMGGDSRYRVGKDGNYRYNQSLLLRVKKNFGFDNISAAVQALVGHHTMLRSRFYRTAEGGWTQRTVAPSNNSYAMQFSTIGNNKELEIVIARSQAMIDIESGPVFAVDHIQTTDDYQMIYLVAHHLVVDLLSWRVILDDLNELLMSGSLLSHRSMPFQKWNELQKKEIEQTEITSPLPAGTPVGNYAYWGLQDVSNTYADASELGFSLSPELTTILQSTCNRVFRTECADIYLAAILLSFSQTFHDRSVPVIWNQEHGREVSDPSIDISDTVGWFTTLSPVGSVLAGTGNDFIDVLRRLKDVRRALPRRGAQYFASKFFKFGGPDLFTEDWPFELIFNYAGSLERLEESNGVLEQIPFPGRTLASKTSNIGPNVGRIALFEVSAMVSQGSAHVKLVYNRRSRHQDLISQWIQNFEHLLLEAIGRLRYHTQELTMSDVPQLDVTYDGLRKLNYERTSLLNLTSVRDIEAVYPVTAVQQGILVKQAVDQEASYLHAIYEFSSLTGRPINISQLCAAWQNVTTKHAALRTVFIDSVTETGVYDQVVLRRTSPSMLFIDVTSGEDPSESLNNLPALPSRTSGQTQHRLAVCNTPTKTLVKLDINEALCDPQSLNVIFLDLRRAYTTNQPLPEPTGLTYPDYLKFLESARTSQSLDFWIGRLAGAEPCLFPRLTQESPKPVFENYSFDLEVDGSMFVEFARSRSVTPDAVLRLGWGLVLRVFSGKDNVCFGYRATGREAASGGPSMRNAVGCFSNTVACNFDLSPYNSLANVLAIVEEQYVASLRHQHVSIPEIHHVLGKRGNDQLFNSVVSFTNEPSELRSRHTGQADFELNSVSHRETSCYDLAINVRLGSGRLVVDIGSLSLVGEREAPNIANTLSKALRTIMEDPASSIQGINLFTDRDYAQVVAWANERAPPEPRVAVVHELVETNARGNPHAMAVCAWDGQLTYGKLDDLSTRLAQRLSEAGVTTGVTVPLLLEKSVWSPVAMLAVLKAGGAFVPIDSADLSMIQPIFDNISSRVAIECDNAGGVLRNLFDTVIVLNGELMTQLKLQAPRHVESLATEDDAACVFFTPSNSREVRGTAFTHGALSIALLTQGPAASINYGSRVMQLSSYNIDIAISEVFATLVNGGCVCIPNETERVFDYVGAVRRMEVNWSYMTPHLSRKLNLEHLPSLKTVCFRTRSLDEDTYAPWAGKKKVIFAYGAPDVCPLGISFMEVHGPHQLNRIGTPLAGNFWLVNPEDHRNLMPIGSIGELVVEGPTLGCSFARGQMDRTHWNAAEFSGSAPGKNTRYFKTGHRMRYTDGGALQLVSQKREDIEIDGSLVVLSEVEQSLRRCLGQGMDVVVEAIAFKGSKAPPVLTAFVELGSMFDGPEDLQRLSHVTRERIFKAKRVAETGMRNKVPHHMIPQIFVPVKDLPITSSLKVNRRRLQKTIHGLSREQLLSLSSVPNPNEVQTVGTTSLPLTQTEERMRRIWAHVLNIEDETTISAVDGFIKAGGDDILAAKLVVCCRQEDIAISIADVLRDMPLTDLCRPVTAGDSRSNVQSFSTASSTSTRPTSTSQAGSEDITPTQNNSHASVAPAIVDPEKKARDDRLRGVLATKVGVETKEIKDVAEASSMQSRYIESGMLRGRANINYFVFSFHGPVDHRKLEEACQTLITIHPILRTAFVPYKRRMYQVVLKTPPADFNRYLCPSWRLAAFAEKVIKKDQSTPIAFSAPMTKFILLDGGKQSTLLLRLSKAQYDDLSVALLVKDLKKLYDGAQNPPRRPTYAEFIRCAHISNKQGAEEYWKLLLDGANMTRVVAHSKPHQLTNHVKTIRQRIAVPSLAHLGISFETILKAGWAMTLAELSGTADVVFGEIVDGRQIRLSGGQSVAGVLGPTANTTAVRVRFPEGDGRLSPLDLLQYVHGQRIAGIPFENFGFLDLVERCTSWPYWMRFSTVVQHQYEETTVVPSESKLFHLGKGGDAGALCKFSIIESRAQDVPDMFIHSMARGGITANDNSNIELNITFCENRIPVSFAEETLRILIGNVAVLTSGSIMHVVIPSAAQYKSKRPQIPLPQMPSTTLTPSSPVSHRLPASDMEAIQRVISKCWAAASLDPSSLGVPEEHREHAAFYDLWGSLVPASQLASFLTREIPKLGLLGVGVDFGVTMEEIADNPTMARQLDLIVRKAALALPKSAPLPSSPSRNSHTYHLSLDSSRKVAAPLSSPSRNIASKAVSKLTSKLKGSSADKEASRSSLKLPTRQDQQVPFSAPPFKSSFDTSARTPSPPREQPPVPTGVAESPRLPYSAPYNAQDELERQLDRVLNEITAANENALNTGRSTRNASIDNDGVQMQRGGSTGTYSSGVDYSSGVDSLTDGSSTTTHSTTSSDFENAVYASLPGYFGGGSNVTVQKAPVVSPASSSARTPRTPRSTQYRQKFYGQNISIKPLPHTIPEGGIDDVVSPLSPPQGHRRFFSAGGGHSRYHHQRGDSSLVTPITTQGPPPPYMDYPRRG",
                "length": 2882,
                "architectures_nb": 1,
                "domains": [
                    {
                        "name": "PP-binding",
                        "start": 41,
                        "length": 69,
                        "cevalue": 3.5e-13,
                        "ievalue": 9.9e-11,
                        "score": 41.2,
                        "hmm_length": 70,
                        "hmm_start": 2,
                        "hmm_end": 67,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 291,
                        "length": 69,
                        "cevalue": 4.2e-15,
                        "ievalue": 1.2e-12,
                        "score": 47.4,
                        "hmm_length": 70,
                        "hmm_start": 2,
                        "hmm_end": 69,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 376,
                        "length": 301,
                        "cevalue": 3.1e-51,
                        "ievalue": 1.9e-48,
                        "score": 164.8,
                        "hmm_length": 284,
                        "hmm_start": 2,
                        "hmm_end": 281,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 858,
                        "length": 292,
                        "cevalue": 1.9e-62,
                        "ievalue": 1.1e-59,
                        "score": 201.6,
                        "hmm_length": 284,
                        "hmm_start": 2,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 1333,
                        "length": 479,
                        "cevalue": 4e-108,
                        "ievalue": 9.9e-106,
                        "score": 353.6,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 1851,
                        "length": 70,
                        "cevalue": 3e-13,
                        "ievalue": 8.6e-11,
                        "score": 41.4,
                        "hmm_length": 70,
                        "hmm_start": 2,
                        "hmm_end": 68,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 1997,
                        "length": 281,
                        "cevalue": 2.6e-62,
                        "ievalue": 1.5e-59,
                        "score": 201.2,
                        "hmm_length": 284,
                        "hmm_start": 1,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    }
                ]
            },
            {
                "id": "MGG_07858T0",
                "sequence": "MSIINHTDSAKPRLSEAEADDWRRVFQEAPPCVFPQPRAGAPSASTPSASTVQSGSVLRRQIFLPNSGRSGFPLDAVLQAAWAFLNASYSDTEDVVFGMALVDEDTDDGEPRTALPFRFTLHPDQTIADCLEAVEAQELPLLSSSGIDLEAIAGLGPELRGATQFRNQLVVYPAIMANTDVLLDRPLNVECFLNPSGVLVQAFYDPEILEGVEVRQILATFEFLIQQFDDVSNLGRIISQVEIISPQDKGQLQKWGEHFPPAVEKCVHWLFQEKARETPCAEAVFSIAEKVSWTYKQLDTLTDKLAHLLVSKRVSPGKIVPLMFEKSVWTVVAAIAVLKAGGAFGYIEPNQPWEDVSRLLGACESTFVLCSAKYEGLLSTHDVESVIIDEALLSRLPSCGSVEDISQPADISYIIFTSGTTGRSKGIVSNHSSFCTSILAHGKAEFYGPESRCFAFSAYNFDVSVTDIFTTLAFGACICIPSDEEKMNALAATAARMRVTHITATPTVSQFINPGDVPTVKTFITGGEFASPEIIKKWVSAGRNYINIYGPAECNSRITHHSFKVGDSGSCIGRPSGCVVWITKSNDPNALVPLGAPGELLIEGHLVSNGYLKEEDKTAEAFIAAPDWLVRMFPDRASSRLYRTGDLAQWLPNGKLRLLGRRDTQMKIHGVRLEAAHIEFKLSAALPSGSQAVVEKITVGQDPKGGQESKGGQESKREKLAAFVTLPGPPTNDDTPSFLEPRQDLCDLLAGVQETMLANLPAWMCPNYILPLDKFPHGQSGKVNRKVLRDMVADWSEESLNRFTVSCPAGNKEVPIGAMEKAIAGLWAEVLHLPASLIGRQDTFFRLGGDSVAAMKVAAACNNRQNGLIISVADIFRHPKLSDLAANISTAVAISETTIAPFELIGGPSCLDQYTQALNQAGIDPSTVQDVFPCTPMQEGMMAETMLSPNTYKLQHVLRLDPLIDLPRLQGALDRLVQSFAILRTRIILMPRIKGVTGSSSYQVVVKGLEEYSPVQVKTVDKVKSALSAEKKAVKVGYGSELSRFALFIAEGGKYLVWTIHHAVTDGYTYNLILEKLQEMYNGTEPSTITPTPFAHFVKHLQDQDPERNAQIWRQMLDGGSSPQWPSCSDKAHEPIVTRTITKTFSLPANESGCTISTVIRAAWALVLSGLVQSPDVIMGLTLAGRDIELPGIDNCAGPCLNTVPFRVLVKNETCAEMLRAVQQLYADIIPHQHIGIKNIRRALSVSSEACDISNLLVIQPGYRVDQGLWTQEDDLSTDEELNFGFTLECILDSESKMTVLCGFDEIMVFETKAREILDMLSTAIDFLTPASNQGKLLTEMEGLHFVQRTKIPKLNIGMDAVEQCLHSLVEEQARSRPNAIMIDAWDAKLTYRETDEYATRLASFIAGLGVGPEVIVPFAFEKSAWTTVAILAILKAGGACVALDMSYPRSRLERIMQDVEAKTVLCSRRNEQALKTYKGLHSIVVDRNSIDCLPSEAFRSDVKPTNAAWVVYSSGSTGTPKGAVLEHRSLATTARTNSEVLGCGPDTRALSFASHSFDVAIEDNIIIPMFGGCICIPSDEDRFNDLAGVMTRMSVNWADLTPTVARMLSPSTVPTLRTMVLGGEALTQDIIDTWTPVDGFKLYNTYGPSECSVQSTCCLEPLGRDARGGNIGYPMNCNIFVVDSDNPNVLLPGGETGEMLIEGPIVGRGYLKNEDKTREAFVRGLVWAKDPARRFYRTGDLGVLNDDGSLSFISRKDTQIKLNGQRVELGEIEAVLLKTSNLAQVCVEAFSPQSSPRRKLLAAFIQLERRPSNEKAEASSALEFVDMTSSTREKLVSIKQNAANHLPEYMVPSLFIPVYSLPINASGKIERKVLRELASGFSQQQTVTYALRADAAVVDGPVAESAIAEVLMELWAEVLQIDLLSHAIGSDDSFLEMGGDSIAAMQLVSRAKMAGLELSVRGIMKTPTFANMVLSAKVIPGVELRPKRISTAKVSKFGLSLSIPTPTSAISRSLPTPSLAKDEPYSAFSLVPETLSRTTLLNEVLDSVLGEERRLVNDVYPCTPLQDSLMALTAKDSTAYVLREVFDLPEHTDINRFKQAWEDVVAANDIFRTRIFHVAGHGSFSVVLDTPLEWTEVETLDEYLALDTAKEKHMNYGTRLVRFGLVSNHGSPQFVWTIHHALYDGFSYGLTLEAVDQAYQGMGLPPTRPILDLVRYLGQLPQDGVADFWTGNLEACQAIPFPPVAPGQICIADNTVKHSVKFRRPPRSKFTAATVLKAAWSILMARVSESTDVVYGLTSFGRDVPIDDVDIINGPLLTTTPVRVQVDLDATVELFLGQVNLQSIEAGPFSHAGIHNIKKLNNSCRSACEFQNLLVIQPANNNADEDSLFCDRATHTTANIISGFGLVVECGLGEETIALTAHHDSSVLSALRAERLLRQFARIIEQLIRLPRSAAGITVGEIDVLSSKERQDLREWNKNCPAWMDACMHQLIKRHTLSKPEFPAIESRQVTLSYQQLDDLATHMAHQLCELGAAPERIIPISMEKSVNAIVAMLAVLKAGAAFVPINPEDPQDRRADLLAQVQAEIILVSPNTKDRYAPFNKLKVVVLPPLNVAEWGPLNTSPLPSPLNKVKPSNLAYVLFTSGSTGRPKGVMTEHRSVCASTAGHGAAMGFGDFPRRVLQFATYTFDACIGEIFTTLSHGGTICVPTEQERMDDLSGFIRDFRCDWAFFTPTFARLLKPESIPSIKTLVLGGEAVTAESVDTWADKLRLMNGYGPTETCVFCTTRDISKGDRAEKIGHMVSSVGWVVDPQDHNRLVPIGCTGELLVQGPGLSRGYLGQPDKTREVFVPAPAWLRDFGYSTDQVLYKTGDLVRQDLTDGSLLYLGRKDNQTKINGQRLEIGEIEAVLNGKDAAIEQVVVVAGKTTIDKNKQVLVAFVEFVSKSSNNDMLLELDDESRLKMKELETLARASLPKYMVPTLWIPVSKMPSLATSSKTDRKTLAFKIANLTPEQLTAYSLSTHANVSSRAPSTNMEISILNLVAQSLGRDATSIGVDDNFLALGGDSITAIQLTAAARAAGILLTHEDVFRHPCLADMAMVATFTDASAANAHDVTDRPFSLIPEDKRETLFSALETTYRIPRSTIADVLPCAPLQPGLIALTAKDSQAYVLREVYRLPAKLDVARFKQSWEAVARDAGILRTTIVNIDELNSFYQVIRGVNNKVIEWRTGKSVKGYLDEDKRLPFQLGTPFSRLAIVDTPFTGSYFIWSIHHSIYDGWSKNLILRRVQAAYESSSPQPVIEPTPPFSRFIAHLQQTDPEECKAFWQNQFKGISAPAWPPLPNQQFNPLLDGEVAITLPFERPAGSRFTTSTIIKAAWALVQGCHSGSPDDVLFGVIQSGRDTPVQGITEMVGPCITTVPLRIALDRTSTTVPQFLQMIQDQTTDMIKFEHAGLQNIQRMGRECRDACGFACVMVIQPPDVHDEASFLGAQKLSDEEKETLRFGMGIQIRIRRDNQLDVLGNFDHRITPEAVMRRILYQFKHVVEQIMEHAGESTMPVSDVDLFSPYDRDQVIAWNQPTELTPVDLEGHLAGGLTHELFHRTATVNEAREKSMAVNAWDVDFRYGDLDRITTKLAHHLRNTFNIGPEVIVPLCFEKSGWAIVALLSVIKAGGAVVFLDPSYPMARLNEILSQIEAKVILCSLAQVSLWRSSGLSVQVVDNVSIAALPDAGPELPITNATMSSSLYVIFTSGSTGVPKGCLIEHRAFLYSCQAQARIFGMRPDHRVLQGCPYSFDVSVMEILTTLLHGACVCVPNERAKNRSMVEVINDFHINWTFLTPSVVKFIDPAEVPTLETLILGGEAMTRQSIDIWAGKVRLINGYGPTECAISAAVNNNITLETDPANIGKAVGGMCWIVEAENHDRLAPVGTVGELIIEGPTLGRGYLKNPEKTAEAFINDPAWSLKLDGKHRRLYKSGDLAYYDADGCIIFCGRKDAQVKVRGQRMELGEIESHLSQNPEIQHAAVFYPASGPCKGQLVGLVSLKKVGAETNRDGIVELVDGQETSIAAAITSDATIQLSSLVPGYMIPNLWIPVKSFPLLPSEKLNRKCLAQWLNGMSDELHKRVCGISTANPDGSSVSPLAQVAEPFTDAEKTIHQVWCDVLNLQAKEVGITQDFVTLGGDSILAMAMASKLRKAGFQVSITDLLITRTIAKLAARIGHTAKSPRDKSMRPLGLRLVSPATESDLDNENDTGYESDNSDATTAATSISVASRGRAKAAHPALSQQPTELFDLTPMQQYYANLALGNDELSRQTDARFNHSFCIKLKRPINPAILSSAYSQLISRHMMLRVRLQRCGKEQAACGFRQFVSPDIKRSFRLREWSNVASVDDVKDRLEDARITLDLENGPISSLDLVSTTAGDSFLYIVAHHLVVDLVSWNSILRDFDDLLSKGAFSHEEPGPFPLWAQKQAEYARLHLDPKTTLPAPIPAADFAFWGMADADGNLVPNLARDAIHHTICIPEAATAMLLRESHAKHEAEPMDVLVSALTRSFFLVYGQTRESPPAIFRFGHGREDIEGLPDVSSTVGWFSTLSPLHVPVGLGGDCSAAGVLGRTVELRRRTPHNGWAYFAARYHHADGGAVFGGHERMEVAVNYLGVRDRQVRGADSAVFDLSRMVDGGLGAGGQDVKCMSLFGVTAEVRAGCLEVDLEWNRRVRGQGQVRAWWREFEACLKELASAGSPYVRSGSGEWGVVPSVGRRESLSREQRRMRSLSRQRSRQSSNV",
                "length": 4778,
                "architectures_nb": 1,
                "domains": [
                    {
                        "name": "C",
                        "start": 4,
                        "length": 119,
                        "cevalue": 2.4e-15,
                        "ievalue": 1.4e-12,
                        "score": 47.1,
                        "hmm_length": 284,
                        "hmm_start": 173,
                        "hmm_end": 260,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 293,
                        "length": 492,
                        "cevalue": 5.6e-149,
                        "ievalue": 1.4e-146,
                        "score": 488.3,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 818,
                        "length": 71,
                        "cevalue": 2.4e-21,
                        "ievalue": 6.7e-19,
                        "score": 67.4,
                        "hmm_length": 70,
                        "hmm_start": 2,
                        "hmm_end": 70,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 930,
                        "length": 282,
                        "cevalue": 1e-72,
                        "ievalue": 5.9e-70,
                        "score": 235.3,
                        "hmm_length": 284,
                        "hmm_start": 1,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 1390,
                        "length": 482,
                        "cevalue": 2.6e-158,
                        "ievalue": 6.4e-156,
                        "score": 519.1,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 474,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 1907,
                        "length": 71,
                        "cevalue": 3e-18,
                        "ievalue": 8.5e-16,
                        "score": 57.4,
                        "hmm_length": 70,
                        "hmm_start": 2,
                        "hmm_end": 67,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 2059,
                        "length": 270,
                        "cevalue": 9.5e-68,
                        "ievalue": 5.6e-65,
                        "score": 219.0,
                        "hmm_length": 284,
                        "hmm_start": 1,
                        "hmm_end": 284,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 2513,
                        "length": 485,
                        "cevalue": 7.9e-164,
                        "ievalue": 2e-161,
                        "score": 537.3,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 3032,
                        "length": 69,
                        "cevalue": 1.4e-18,
                        "ievalue": 3.8e-16,
                        "score": 58.5,
                        "hmm_length": 70,
                        "hmm_start": 3,
                        "hmm_end": 67,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 3146,
                        "length": 279,
                        "cevalue": 3.3e-77,
                        "ievalue": 1.9e-74,
                        "score": 250.1,
                        "hmm_length": 284,
                        "hmm_start": 1,
                        "hmm_end": 284,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 3620,
                        "length": 483,
                        "cevalue": 1.4e-163,
                        "ievalue": 3.6e-161,
                        "score": 536.4,
                        "hmm_length": 475,
                        "hmm_start": 2,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 4146,
                        "length": 69,
                        "cevalue": 8.2e-16,
                        "ievalue": 2.3e-13,
                        "score": 49.6,
                        "hmm_length": 70,
                        "hmm_start": 3,
                        "hmm_end": 70,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 4285,
                        "length": 311,
                        "cevalue": 5.2e-45,
                        "ievalue": 3.1e-42,
                        "score": 144.4,
                        "hmm_length": 284,
                        "hmm_start": 2,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    }
                ]
            },
            {
                "id": "MGG_12175T0",
                "sequence": "MDVPSNDWNLASKEPSLSILNPAPKLLPGPSLLHNLISAVARHDGASAIHHYAGAQGATHLSYHSLHQRSNLLAARITAAVAGDTLAVKQLIVPVLLPQSPELYVALLAILKAGGAFCPLNLDAPPERVRFILEDVTARVVITSQTLANVFSEEQHDVKVIKLGSDWADSCWDNGCDLSDSISHRAATPSDLAYVMYTSGSTGTPKGVGVSHAAATQSLLAHDEHIPHFRRFLQFAAPTFDVSVFEIFFPLFRGVTLVSCDRRLMLDDLPAVLRQMEVDACELTPTVAGSLLRKRENAPGLKLLLTIGEMLTGPVVQEFGGGGEGQQDSILWAMYGPTEASIHCTLQPAVKPDMSVNCIGFPLSTVSAYIVAIQTEDDEPNQLSDGGLKDPTVLPVGEIGELVVGGYQLAEGYLNRPEQTASAFIDSKTYGRLYRTGDKARLRADGLLECLGRISDGQVKLRGQRMELGEVEAAILRVQGCHGAVAAVVNGSILVAFCLLDSLHGEDHTSAEPRITKACEDWLPKFMVPNEVLVLDEFPRLPSGKVDRKGMVAAYEQRRRETHVVASVPEYQSSVEQRLCQLAEKSLRVAVEPSLGLSSAGLDSLTAIKLASKIRASGFQVETLQVLQSKSIRDLAQLVRQLADGRQETEGQSEIEVSRPISEIPWLVHHAASQIQEVIRCTPVQESMLAETARNSDAYCNWIEWDIAESCSTQDVVKAVQKLAQANEVLRTGFAQSAKGQFLQIIWKQLECFDQSTDEATLTTPSGEDLPSSIIYTIRQQESSVRLTIKLHHALYDGWSMDIFVRDLNLALQGADLRPSSQYSSVVKYYNSPSYNTAKDNARQFWAGQLLGYQPSAFPILVTSRSPGPSGTRSDTFTIDIDPDRLRNLARDLEIGSQILFEACIIWVWSLIIGSSDVVIGTVTSGRTLPIPGVEDIMGPCLASVPTRAKLSDVRTVKELLSYLQATNRAMLPHSILPLAEIRKTSGLLPSQSLYDLLFVYQESLLSTSNYSTTSRVRQVAHQDYLETKLLFEVEPRPSDFLLRITYHTDAVPDNYIPVLAEQVRCLIHYMVENPDASMTCMRDALPSAMASRHNINPLSYQGCADLARMVEETATKFPDMPAVCFADIIPAAGDTQVQTISYQELNRQANRIAHLVIGSKVMPGMTVAIIMEKSISLYAGILGILKAGCAYLPLLPSTPLQRIETILGHSEAAACLCDASSIRNLRSIQTGCQFLDISKEEDLIRYPDSNPDITPDASRVANIIYTSGSTGIPKGVCVTQLNIMSNLDVLSRLYPLSEGTDKPGRLLQSCSQAFDVSVFEIFYAWKMGMCLCSAVNDTLFADLENAIRALRITHLSMTPTVAALVQPKNVPGVEFLVTSGEPMTEAVASKWAGILYQGYGPSETTNICTVKKMKAGDVIQHLGFAFENTSSFVVHKESRNGVDLVPFGCVGELCFGGDQVVQGYLGMPELTREKFVEHPEYGRLYRSGDLGRMLPDGSLVISGRVDDQIKLRGQRIELKEIDSVTRESESVNAAVTILVSRGTQKADQLATFYVPLATAETEKHAVSYQVLDDAQTARPAPESQAIFHLLTSRLPTYMIPNYLIPISVIPTTPSGKVDKARLRDTFAQLDQETLGRLSAVGGATEEAEEQWSELETAISRILATVLQIEQMAIRRWTPFPSLGVDSISAISVAKQLRDLVGAPVPVSQVLKSSCVARLGQMLENSSVQSASTKTIRFETQFFDQELLALIEQNFKAHQDNTAGECAEIDAILPCTPLQQGMLAASQATTASMGASYVNQMVFKLAADPDTMRSAWDTMVERHPILRTCFITTNSSIHAMVQVVIKRWKSQWHMFNDGESLDDCLKAMADGLAPPLDSFVPPASLGLARHDGRNTLIFTCHHALYDGNAIAALLDEVEQFIQVGSLPPLPTSYEPFLREMLSLPDSTDNFWKQQLSNFIPKTLPISGKSTEGPGAVSHVMGVSLETANNRLKELGFSLLAVCQASWAMALGIILDEPDVCFGNVTSGRSVPIDGIEKLVAPCFNTIPVRADLSGLRRNMDLVKLLQDSGIEALQYQFTPLRRIQSLNAYSNGATRLFDSIMLLQQPSQPLNPDIWSLERDEGSMDVPLVCEAIPEPRENTLVLKMHYDGVAASSPMASFLVQLFSHVFCEVLSYPSAVPLTQDALPDALRQQLEALGLQRSIATSTPKSDQNQLPVAAENYKVSETESSIRSIFANLATVPKSAILPNTTIFQLGLDSISAVQIASALRQEGFHVSSIDVIDHPTYSALAQFFEETKTRDSRSANPSYDLKAFQTECAKYVTENSRYRDTVEAILPCTPLQQAMLSEFINSDGCNYLNFLHLRLGDKTTASTDDVFKALKNCSGSFEMLRTGFIPIEHKDASFAMIRYCEWAGKVTSVPREAIADFSVDRWRSEVKSTVYNNLDQPPWEAVILEGEAGVEVHLAIHHVLYDAQSLKTILDSLAPSAADKRPAACNESVDVAIQEIISRSRVGKEDAETYWRSLATETVINRFPVMTPLRAEERSICVESHLSKAKVSLLESSLRKEGVTMQAAIQGAWTRILSSYLGESCMVFGTVLSGRSSGATRSAVFPCITTLPVVAENKSLNRSLVESMMERNKNLHRHQQVPMTQIQNWLGLPETRLFDTLVVYQKLQDDAGPGALNTWEVIEDKATVDYPLSLEIEPRGEHLHYQLTFFSDLLPQQQSALLLRQFDAVLTHLALEPEGCEDELRTGSPSLFSITPAAEPELPSNVRLLHQFVEEAARRYPQKTALEFVSALDGGDPVSRTWNFAELDQNGNRVANILAPYTKVGGIVAILFDKCPEAYFAILGILKSGCSFVALDPAAPAARRQFIIEDSGASALVTDMDRASNLDIDVSVPVVGLDDDFILSSPSTPLTDRQAELSPQDRSYCLYTSGTTGTPKGCEITHENAVQAMLAFQDLFSGHWDQDSKWLQFASFHFDVSVLEQYWSWSVGIALVAAPKDLILEDLITTISSLQITHIDLTPSLARLVHPDDVPSLCKGVFITGGEQLKQEILDAWGDQGVIYNAYGPTEATIGVTMYQRVPRNGRASNIGKQFLNVGSYVFKPGTEIPTLRGGIGELCVSGKLVGKGYLNRKDLTAERFPTLEYFGERVYRTGDLVRILHDGCFDFLGRADDQVKLRGQRLEIGEINHAIKTGISQVQDVATLVIRDESKQKDFLVSFVVADDQSDSSEAQSQTLEPIFSPDAATLARDVQDSCRAKLPGYMVPTYILKLPFMPLSSNNKAEVKMLRSLFSRLTQDQLVAASSAGSRTAADLNGDIARILIGTLGNMQFLSPGQEPTADVSIFELGIDSISVLRLSRALKRGGLAQATPALILKNPVLGDLVRALQSEVTANDAGAVLEARQLVEACQHLHRSRACRALGVSSEHIEYIAPCSALQHGMAMRCKTEEHRSTYFNVFTFELRPDVDIARLKSSWQIIVDSFAILRSKFLVSSEGFVQVALKEMQLPWTELETADDELESKLLGMHEQWLDRNSQNLTSPLELLLVKTAGKNLLRLHIFHGLYDANSLGMMIAKVAALYLGTEDIESRTTFIDALIHGPLRNFNHTKTFWEYHLSGVSLQNLPQLSERPSSHDIELSRTLSFAPLEPVRQRLNVTHSAVIQALWLSVLQPRYAKPLTLGVIVFGRAIDVENAEHVVGPLFNTLPFHSGSCTSGSGTWASLVRTCHSFNTATLPFQHVPLRDIQKWCSGGRPLFDTLFSCQREPLSSVAAAEQLWTEISASPAPISSDYPLAFEATLARDDRLELLLVAQKGFADEHVLSAMLDEFEHSMAMIAGNMDAMIGSSDGGLAPEIPSHEVRDGQATFSQAELGNTSFEWTDDASLIRNEVAALAGVSPEEVSESTSLLELGLDSIDTIKLSARLKKNGIVLTNSQLVKGQTIARFTETLGQVDKANNTSTSTTAGNDAASKVASMTELLRKHIASQVQNLDLDQVQTVLPPTPLQDAMVADMFQSGMRRYFNHDVLELPPNVDMERLGSAWQSVVDHSPILRTTFIEVESPEFDFAYCQVVHSKMQLSWSRREVASQGEFHQVIESIRRHAEETAGSDGLFKVTPVWLGQQRFIVLSIAHALYDGWSLELLLRDVQDAYNGDYSPRPEYLDYLGHILESATEESKDFWIDTLTGAYAKNIQPRKLQLGSRKANDGTKPRETLVHRAELKSAKPAAELSTFCRRRAVSPQVVGQVCWAAVLSRRVQSLDVTFGCVLSGRETESAESLLFPTMNTVAVRAVLHGTIGSLLRYFQETMAGVLQYQHFPLRKAQRLGGSRTPDGLFNTLFVMQKQRRASRTGPETGDLLMTSVDGTSAVEYPVCIEMEIVQDSVIWRTACSDDFLGKQDTEQLLRELDQVLAFLTESSPDLSVFRSTTSRPGVAGSDILVCGLDPFRLKAQNTASSTTAMSSQTDASTLIDVDSDEEWTDAEQKLRTALAEVSGLPQNAVKRSYNLYNIGLDSISAIKVSSLLRKVGVQIRVKDLLRAESLVDMAKMTGSAEQAAPKLPKSAVAFSAAAKLGAYEPLVVEAGLDEQSVQCIIPATAMQAHMISLWQKTDGAVFFPEFQYQLPAKYNDLTLGSLQHGWRDMVAELTILRTVFLATNNRDCPFVQVVLLPNTHYQQQTLSLGDNSGPVQSGVTSLPMVYFAAEREVEGSADSPWIITIKLHHSLYDAFSLQNIVRRYGELLAGRSSGQLLPVPDYTGNWNARITSEASQELRSSRQKFWVDYLQWATSLPFAGIPASLTSQAATDAKARVSKFVPGAVTAISDVQSECARRGVSFQALFIAAAAAVISAPAPADGAHPNDLVLGIYLGNRDDQDSDQLPYHPTLSLVPLRVRRASGRSLFGVAAEVQRDLHKISDAGNAAVGLWEIQDWTGLQVDCFVNFLGSTALDEQVEDRLKLLEPLGEAKAIDGVARAGAHPQNYHWLGENTVIDAFKDAVDIEAAFGGKDSLDIGVFGPEGMLKNEQGATHVISRLVEVINALGRNE",
                "length": 5034,
                "architectures_nb": 1,
                "domains": [
                    {
                        "name": "A",
                        "start": 61,
                        "length": 487,
                        "cevalue": 3.3e-141,
                        "ievalue": 8.2e-139,
                        "score": 462.7,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 574,
                        "length": 66,
                        "cevalue": 3.7e-12,
                        "ievalue": 1e-09,
                        "score": 37.9,
                        "hmm_length": 70,
                        "hmm_start": 2,
                        "hmm_end": 70,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 677,
                        "length": 276,
                        "cevalue": 2.9e-64,
                        "ievalue": 1.7e-61,
                        "score": 207.6,
                        "hmm_length": 284,
                        "hmm_start": 2,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 1141,
                        "length": 479,
                        "cevalue": 1.9e-143,
                        "ievalue": 4.8e-141,
                        "score": 470.1,
                        "hmm_length": 475,
                        "hmm_start": 2,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 1654,
                        "length": 70,
                        "cevalue": 6.2e-14,
                        "ievalue": 1.7e-11,
                        "score": 43.6,
                        "hmm_length": 70,
                        "hmm_start": 2,
                        "hmm_end": 69,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 1771,
                        "length": 283,
                        "cevalue": 3.2e-69,
                        "ievalue": 1.9e-66,
                        "score": 223.8,
                        "hmm_length": 284,
                        "hmm_start": 2,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 2225,
                        "length": 69,
                        "cevalue": 1.3e-16,
                        "ievalue": 3.8e-14,
                        "score": 52.1,
                        "hmm_length": 70,
                        "hmm_start": 2,
                        "hmm_end": 69,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 2333,
                        "length": 290,
                        "cevalue": 2.5e-48,
                        "ievalue": 1.5e-45,
                        "score": 155.3,
                        "hmm_length": 284,
                        "hmm_start": 2,
                        "hmm_end": 280,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 2807,
                        "length": 479,
                        "cevalue": 3.3e-138,
                        "ievalue": 8.2e-136,
                        "score": 452.8,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 474,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 3318,
                        "length": 71,
                        "cevalue": 1.5e-12,
                        "ievalue": 4.2e-10,
                        "score": 39.2,
                        "hmm_length": 70,
                        "hmm_start": 4,
                        "hmm_end": 69,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 3431,
                        "length": 280,
                        "cevalue": 5.2e-52,
                        "ievalue": 3.1e-49,
                        "score": 167.4,
                        "hmm_length": 284,
                        "hmm_start": 2,
                        "hmm_end": 280,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 3880,
                        "length": 67,
                        "cevalue": 2.8e-11,
                        "ievalue": 8e-09,
                        "score": 35.1,
                        "hmm_length": 70,
                        "hmm_start": 5,
                        "hmm_end": 68,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 3994,
                        "length": 295,
                        "cevalue": 9.1e-67,
                        "ievalue": 5.4e-64,
                        "score": 215.8,
                        "hmm_length": 284,
                        "hmm_start": 2,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 4473,
                        "length": 69,
                        "cevalue": 4.7e-16,
                        "ievalue": 1.3e-13,
                        "score": 50.4,
                        "hmm_length": 70,
                        "hmm_start": 2,
                        "hmm_end": 69,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 4583,
                        "length": 303,
                        "cevalue": 1.9e-41,
                        "ievalue": 1.1e-38,
                        "score": 132.7,
                        "hmm_length": 284,
                        "hmm_start": 2,
                        "hmm_end": 282,
                        "color": "navajowhite",
                        "status": "likely"
                    }
                ]
            },
            {
                "id": "MGG_14767T0",
                "sequence": "MLQLTPQDPEALRSGRSDSAARGFQTRPSGSSSAGASATSTTLYTRTRDGFLTYCKPADIPLSAALLAWRLLVARSGEEDGVEALRLGRYVEDWTSHRDSPTTRSDGGAQTFTAQVAKFMVAPGATIQEAHAEAERLVQGTLGRADERVGANSTVYFTDAAQSDGRKGAVSQIAYNVCIKLKTSPGQLVISFEWTNSEITRWWAGRALQAYTRYLTAILSQVIMSKPGTSVDGQPGSARLVWDLIGPSNEDLNQIWFWNASMPPTVERCIHDLVSERSISTPDKVAVQAWDGEFTYRELESLSNTIARQLRAQAGVRVGDIVMLVFEKSRWTTPALLGVLKSGAAFVLTDPAQPEARLKTIASQTGAKAVVCSKLQADLARRIAQDGDEECSRQDKKQKQKQKQKPAVVLVASDDTTLQHAGWGVGASAGFLPVVPADSAMYVIFTSGSTGVPKGVVCSHANFVSGAIPRAEAVGYGETSRVFEFASYAFDVSIDCMLCTLMQGGTVCVPSEAGRVDNLGAAILASGANMAHMTPSVARVLEDPETVMRSLDVLGLGGEAVSAGDAAAWSRLTKVVIAYGPSECTVGCTINHEVCADNTTIGKGTGAVTWIVHPDDHNRLMPVGSVGELLIEGPVVGLGYLGQPDKTAEVFVRDPIWLRQGHTGSKGRRGLLYKTGDLVKYDANGYIVFVGRKDQQVKLRGQRIELSEIEYHLRKNLPPCVKIAAEVVRPSGAEPTLVVFVDEQQPVVNGTKTKTKKVKNDKVGLDDVVKLSPELGAIVADMDGLLGEELPRYMVPAAYIPLQSMPVLASAKIDRKRLKALGASMTREQIAKLRLLAPKPARPLSDLERSLASLWARVLGTDVEIGLRDSFFGIGGDSLRAMKLVSAARGEGIALTVAQVFDNHTLVDMAAVAVVDGDLGSSEPQNIAPFSLIEKTWTPEEARRAASKYCNVKESAVEDVYPCTPLQEGLMALSAKFPDSYVAQRVLRLADMTEARRLQGAFETAARESAILRTRIIQVPGHGLQQVVVQGPIEWRSGATVEAYLEADRDEPMDLGKPLVRYGLVRSADQVDFVLTMHHALYDGWAMPLVIDRVNRAYDGLATERPAEFKHFIRFLSEVDQGACEAYWRQQLEGATAVQFPALPHEGYMTQADSLLEMTVPAPPRSSGSATTTATIVRGAWALVAATFAGHDDVVFGETLTGRNAPVAGADLIEGPMITTVPIRVAVDRQCRVAEFLARIQDQTVRQIPFEHTGLQHIRRVSPDAMEACELRTGLVLHPAAADHPFDPAYPASRLVPANDAEAAREALKFNTYALMLVCALAADGYHVMASFDSRAVDVPTMQRVLQMLRDVTALLCEGLVDDRVSVGDVVRSVTAGSPAAVETLAELDLLGRGAVGSVDVGATVDRVWLVDPDTNQLLVPRGAVGEIVVDSPSALSLPAIDVPAWHIQVPAVDGEGAVHLHATGQLAKFDQQGKLVHMGRKGERVLPPRPVEDRSARVQKGSEQLSAKEVRLRSLWAQILYIEADGIGADDSFFKLGGDSIGAMKLVSEARPAGFKISVAQIFKTKTLAAMAEMAEDISMTANEAQGEGSGTNEPVATPFSLIEDVGDVDTFVDQQIKPKLSKPWKVSDAYPTRPLQTVAVTGSTQTPRFSMRYEAMYFDDHRGLDVARLQQVCREVVQRNEILRTVFATAQNKVCYGVVLDDMAAEFDHHDVAPGTDVQKFTHQLCNRDIEGDIPEGAAFVKWYLVRAQTSATSAPGALVLRISHAQYDEICLPLILRQLEALYTGQAAAAETIPFSRFVHHTLGTANPRSVGYWRELLAGSAPPTVLRPDLGAMTQVPAAGRRHYAVDRTLDISGAAGTAAGITVATIPTAAWALCLARRRGLADVLFGEVVSGRGTGFAAAERVVGPCWQYVPFRARFAPGVTTGADLLEAVQEQHAASSAHEGLALAEIARLCCPGWPAVDWFDTVVHQDVEHVEDLGFRGLGATTETIYPHQEPLREWKCQAFVADGGRRLTVEIVTFEAWREQADEVLAEVAACVEELVGRPGDVLRL",
                "length": 2056,
                "architectures_nb": 1,
                "domains": [
                    {
                        "name": "A",
                        "start": 294,
                        "length": 521,
                        "cevalue": 7.2e-172,
                        "ievalue": 1.8e-169,
                        "score": 563.8,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 846,
                        "length": 68,
                        "cevalue": 1.6e-21,
                        "ievalue": 4.4e-19,
                        "score": 67.9,
                        "hmm_length": 70,
                        "hmm_start": 2,
                        "hmm_end": 69,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 959,
                        "length": 270,
                        "cevalue": 2e-77,
                        "ievalue": 1.2e-74,
                        "score": 250.8,
                        "hmm_length": 284,
                        "hmm_start": 1,
                        "hmm_end": 284,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 1374,
                        "length": 115,
                        "cevalue": 4.3e-12,
                        "ievalue": 1.1e-09,
                        "score": 37.0,
                        "hmm_length": 475,
                        "hmm_start": 280,
                        "hmm_end": 372,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 1508,
                        "length": 69,
                        "cevalue": 2.5e-22,
                        "ievalue": 7.1e-20,
                        "score": 70.5,
                        "hmm_length": 70,
                        "hmm_start": 3,
                        "hmm_end": 69,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 1630,
                        "length": 294,
                        "cevalue": 8.7e-61,
                        "ievalue": 5.1e-58,
                        "score": 196.2,
                        "hmm_length": 284,
                        "hmm_start": 1,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    }
                ]
            },
            {
                "id": "MGG_14967T0",
                "sequence": "MWALFEEVVQSLPNAPAVQFETSAPWSYEELHKSASKFAEQLQRVVKSGQHVAVMLERSPAQVASILAIAKIGAVYVPVDHNLPRTRVHSIVASVEDCVILCDTNGNAILEEKMPRLLVTGEGRNLAIQPYHLASNAQATCVDPSEDDVAAVLFTSGSTGNAKGVQLTHRNLILPARFLAEREKIGPSSRVFQFARSSFDVHLIDIMCALLHGGLLLQVSQDKLMTDTAGWMRRLEVNTAHLTPSTISMLDPEQLPALQYLVTCGEPVTRGIIDRFASRVVLTNLYGPCEASSVVAKTLRPGDDVSVIGRPSPHASVMVITPGGYAAAEGTTGEIVVKGGSVFKGYSNRDVHPCFLDAVLFPGMQRVSGPWYCTGDYGYVEPSSGNVHLVGRMDDQVKVNGQRVELGDIEAVVSQYVGRCTVLAHSVGGRRRLFAVVSRKRDLSPPEEDVRRDFDGAALEKVVFNACSKCLPPYMIPRTIAVQAIPQSPSGKIDAKKIRSFIESLHQGDAHFFRSAHDSSLPLHQRITALVSERLQQHVPRGDSLLEWGFTSVDATALIKSALDISGREIRFRDFMADPSIDGICRLIESAETREKGVSRAAQVHTAMENFVCESWYRPTLAQESLFRASQMCGHHAYICSFAFEILSPIDVGRLIRSVESVYGRHDAFNTSFSDEHVPTGAEDPCIMARVRNRDFWARSRSRTVSYREVEHLMTATQKKSVADLLLAAFQADHPQEKSLDLAVDPPAWMTLYAADEKGSSWLAVFKFHHLVIDLHSFQRFWSDVITAYRQGPEDFARATPTPPLSFRHFAEMYRAQVLARRDRDMEWWTERARNFAPEPILQHADHGDDDKSSGEDYAASMLWQPMSTQIVAQFLSNRPAGTTAFGRWLGLCQIFMYRLTGAARFLMGVPGSVRTEQPRFSDVVGYGITLGVLPVSIPAEDHVRVADFLNAAARDYWDCHEHDQAIEDVVRCFPARPSAYSRVSPEPAKINFQFAYEDGARLQGRQEIEHGCSGSDGPAIVYKPLDVPPPNSHYALVIHVDDSAVSPRVGFHYQTRSFDERGLHSIVALFEDTLAAVTKGGNDLRIRDLRPDRPLYPVTYAANPTSVHQVDASPSLSLGTSPSQPSQPSQPSQPSQPSLMQILKECWADILGGSPNSLQDDRSFFRSGGDSISVIRFCSKARAKGVVGCTVGKVYASPTLAQMAKAFRLKEALTTALPMPQLCLGPQESLQEGPVQGRSLVGSQLPTAISAAAKVFPLLNMSSVGGALEAAGIAHSDVEAVYPATPMQSAMIWHMRSTPGTYVVQHILRIEGSVNCGRLEKAWERVVAAHPALRTVFVESPKATGDTPYFGIELKQGKDSVVCTTLQHPLVAAEMEDFLLKDRQSGFPVASKTACRLVLVRQSGAVDGNYTMILTMNHASIDGWSVGKILADLQDAYEGIKIRDGSSFSPNVAHMFGADQTQARVFWQSYLSNALVPKPGSGFSDEYGSESQPVIQVARITPENSIGANSLRLAASALNTTPFTLVQCAFSMAISCRAPTPATCSTKTKVMFWTTISGRGYREGDAEAVGNFINTIPCVVHQPGHDAELRLADWLRQEQDAFGGAVTHSHFPVSETMSFLDPGDATVNALLVFSNQSGLDSASARRSLRISHAGGHDYSNVAYTVVVTPTKDKVEFLAKYDARLVSEGEAMKILARTAALVNSMVSMAESSHNGALPSVCRLAHPELDHPAKHHVQSQVRSFKDFMAQASCSKDTLVSLFKNAVKSHPSAAAIESASFSMTYAELDRASDRVAVHMLTEMDLRRGLVALFFPRSVFMIIAMLGTLKAGLAYCPIEWEAPPARVARLLRQLNVSTIVSNNHGFEMLSSLDAVIEAINVDRIMALGIHPPTARPKTALPPIISPDSTCYVMLTSGSTGTPKPAILTHRAVTSAVQQAVKAYALGPSSRVLLCANYIFDASATDIYGSLITGATLVLRSDNELRTDLAATVLAYRINWLHVTPTVFKFMSPSAAYGLRTVVLGGEMLHRSLVRSLTAHVPLVIGAYGPTETAIQVLVSPVAGARGGDDDDVVVYDALPGNLVVLADQRGELCYINEPGEILVAGVQVFAGYEGEVASASQEYFIELRDFPGLKFYRTGDLARWLPDMRIQILGRRDAQLKVAGMRIHPAEIETVLESHPDVLRASVASCSGRLCAMVQAKDCASPSLEGRDLAAFCRTILPGRLVPSFISSVDRLPVLPSQKIDRAKVLAMIEQHLAQDGASADSRHLSRAEAALWSLVLQVTSASSGASVPDPNTALSDHGVDSLGFIQLRGILARDFGVVASYSELRKKGTIRAIAALIPSDRIPQEKSTRTRQTPADMQVLAHNEDRQKAKRVGSFPALPSQRTAWVAQQSLRDSRYNVQRVAEIRNFHGSRVLDGLMKVVSAVDLFRTVFKFDAKHCCLQQVLLPQPNVSVEYTVIREGEDPMSIIRETISSDTFVFDLEKGPMAKWKVFEAPENGTPRVFLYSNIHHILVDAHTTHQLGQLLGQAMQDQPLRLPTTHAVDLALELQKREVQQAKDMDRWKFTLRGARKFESVFCSTTPKSCHNKSFGSVLRTVSLPTMGQKGLMEPFLATFLLLIHHYTGSDDVTITTPVSSRGSVPEFSTVLGNLTNAVFLRSQIFATDTVESFARRVCAAIEFAIEANQPLEAVASACGLVLRDHSVQFVLHDERRTRCDGYVTDISVETLQSFTQSSKPKVNLAWHVFVRDETSFELLIEYETTQHNQAWIQSAADVYKTLVERLASAEFAQHHPSSVLAELKELVALEPESSRHSTHSDQEPLSASSSWSSNDGQIQTPSQSCMSWQSVNHEHDDDDDIRNKCSDETQVPPTSQAVKNGHDFEVLLTKTLQETLGAPTIDPEKPFHELGLDSFGAMAFISNIYEVAPELEVNIGDIMEHQTIQNLARWLAGSMDESATEAGEDQKNSQRVPHQDACPDDQQRQIAPASHIQRLFYLLQEQLGDTTYSVPALYRVHEIPIVAVLAAAQAIANTHDVFRTTFDVEDDEILQVVNANPDHKYSLYDFSSRPDLAVSIQEMRRICHQDCGTLFDLTTGPLVRFHGFLLPDRSQFFFVNFHHIIVDEQSLGCFIKHVEAVATGRQSVHEAIPKASYLDVTRRQNKLLQDPAHLAKATDFWRRALSDDKSHVAWGGVDTKDPSLSIFQPAKFVKRAMTLGGDSAGWAYPLGATSFGAHLFALQLLLALRKGNSTNTMLIPATCRNPRFGEQDMYGSFVNTLPVPLELHHDQDLRENLARFNRTLGGVLSYAHIPSQMIMDMSGRKFGQFDMMFVYHESCAPSESSRRTEPKRRPKLERAMEMLPASPPTTAKFPVTLNLNKVFNSEECTTLLQIYVEYNPGLVDEASAALFCRQFERLLGLLNGRDTAALSIGSLSAVLDDASSPAVPPHFHGRVDTALARENFIDVQILEQAERTPEALAAVFENDVARATYRELADMVYNARHIISSAKGGGIAHCTSLRGKRIAVVGDVSIERLAVLIAVMSLGAAYIPIDLANPLDWNKTIVKDCDPCCMVFMPEEAGSQREDSSANLWSYMGESVPTCTRVRIPAGLHAYGPFKNRNMLFPVQDRSDNDIAYVLYTSGSTGVPKGVPIKHGGLKNSVAEHRRCCMFSTATRLLGVAPWTFDVSVVDMFGPLSIGAQLVLGRRDYILSDLTGVVQYHSVSHISTTPTVASLLDPDEVPTIKSLALGGEPMTKATRDAWAPRIMLLNVYGPTEATVDVITRRCYPDTPISNIGRPLANVQAYILDDSAELQQVPAGEVGQLALGGVQVSPGYLRDPPGRPCPFIQHIKYGPLYLTGDLASFEPDGTIVCKGRMDNMINLRGLRVELGAVESVAEEVLVGRTGAGKCVTSKLLKNGSAQEVRVALFCAAEDTTTADADTRIKIGTVTARQTVTAKQQELISEMKAAVLKKLPKYFLPDYWVPVDGFPRNKNQKLDRKQVQAFVNGLSDVQLEAWHLDNYASAGHLMEQQGGEATMAKPPSPQPLSGRTIASTSTSPRSASTDLVIAAFEKILGAGKAIDAETNFFAVGGDSISVIRLCTALRAAVVAAGLGKITLRVRDIYAVPTPEELAGIIDKQTGKNVDSGGRQLKKPTPPDTFPITPIMDYFLRTGRANINWFNQGHAFQLAPGLTFDDFLAAWRRVVKMHPMLRMRLVTPPGQDPKALARLSIAEAEDANVKISRRVLGSLADLESETHIMQGSLDIEHGPISGIVGEFRDGSRVYCSAVVHHMAIDVVSWHIVCEDMENLLRRREPEPEVSSFKDWAEELFSRRPSHLIESCDIRSRTGFNLFVEDTSCLEKNTHATGFFLNVKAPLHVVQAAEKYGVDTVDLILATLVCAFGRWRDMDGVQLVFESHGRELSHEKLDLASTVGWFTYIIPILFQLPDPSSVSIPKYFAHVHETRVGSMARADFAAPILPVGGCSSQEPECLAVLNYLGHNTSGSADRALRRANEVNMGSWEDPLNKRPFVFEFESSIDDDCVNLGVFFSRAIHTEADMHKLLSLWDSTLREFATGSWIVDGLLDKAAQPRWIPQELTPHRDALEAALRKHKIQPSQVERLVPATDIQAAMVLASLGSRSYMHSYDYDVEVPDSKKLCAAWAAIFRRHSIFRTVFLPVARSVSAAPNTNLLQVVLKADSVADDQIVAMGPPPPKMRAAYGQILSKIFLYQDLEAFYRGSLPITCPAPQFADVAQHQSSMAGQVSQEEHLEFWTRYLKDVEDGGILVDHSIDPVMQKQLAEDRHQKVRLDLDLQRLVTVAAQRRTSVLNIVRASWALVLAAYGSSQDVVFGTVSAGRGIDVPGVDVAGVVGPLLGTSLLRVKVDWTATVDEFVDAVTDTCMDVAEHELGLSLRKILAAGTAGRKGSGGALFNTSIMMPVVGKPRLANQGEEKPREQESFKMTARDRDEVTDMPLIVTVEPGVSVPKTTVISGRMHGRDFDDKYIGRLLRSLGCVLSSFATALEYNSTVAQKIPERTAIRLCDIDLLDKEHATQIEQYATGPEYPPDAELTCWDILDMRARKSPRSVAIEFHTAKAKGKARTITYSALHELAEKGAAGLALQTSTLGKTLHGERVALYLDKSIETVATIFAAHRLCATYVPLDIESPPSRIRDLVGSIRPAAVVCELKDKQLLSGLLGSETIVVTIQDIFGGTAGGAAGSKGRLESTRPKLDEVAAILFTSGSTGLPKGVLMPHRQAAGFGVMMASALQYRTSDRVFAFARMLFDVALTDIFGTFYAGATLLLAPHAECVSRLLPLLQSTRATCVFCTPSVAGLLPGPDRTPLLRCMWIAGERATEAVIKKWTCPRRDGTKQAVRLVNGYGPTEGVVITWKLCRPNTDGSCVGRPAMGMKVRILDEYMRPVPIGTKGLIWCSGRQLSLGYFGRKDATDAVFRPDPWNAGNELIYNTGDIGAYNAEGELLYFSRNDRQVKIHGQRTELGEIESLLGSNDEQVVVILFNNGQGNNNSPRLIGFHAANSPARDHTVDGACEVKEDTSPIGQARTQMLQARARDKLAPFIVPNMLIAITAMPLNSNGKVNQSKLKSFYAARQGASPLSVNLPSPSTIEAHKPGSKDLEYPTPPNDALADCLVHFRSRKSSGPTQQRTIYGLFAVTGLSRQYRAIAERLTPDFNLVGVDNIFRDQPKHYPSIAGAMAADHAAAILHHLYPVDGGPWWNSVTEAPHASHSHWESAPGLEDGKNSIAFMSTLWRWASPGTNGGLSCGWTCTGCSPAFRSFLLALGTYTGADDVVGMLGGRDAILAGEDGCARRSTKRPFCGCGNARMRTGHGDFKAYHDRFNHQDANTSCAWCWKRTSPEHPVHCRFSWAVWRNWPWPDNDRPVGPPDRAQRRKFFQTSLGQPTSFQAFSIATNYFSARPRAARQRPARHERTLRLGTPIVNDSNSDEE",
                "length": 5950,
                "architectures_nb": 1,
                "domains": [
                    {
                        "name": "A",
                        "start": 26,
                        "length": 469,
                        "cevalue": 1.2e-118,
                        "ievalue": 3e-116,
                        "score": 388.3,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 615,
                        "length": 327,
                        "cevalue": 3.3e-40,
                        "ievalue": 2e-37,
                        "score": 128.6,
                        "hmm_length": 284,
                        "hmm_start": 3,
                        "hmm_end": 281,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 1139,
                        "length": 70,
                        "cevalue": 1.2e-16,
                        "ievalue": 3.3e-14,
                        "score": 52.3,
                        "hmm_length": 70,
                        "hmm_start": 4,
                        "hmm_end": 69,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 1281,
                        "length": 304,
                        "cevalue": 4.3e-58,
                        "ievalue": 2.5e-55,
                        "score": 187.3,
                        "hmm_length": 284,
                        "hmm_start": 2,
                        "hmm_end": 282,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 1781,
                        "length": 462,
                        "cevalue": 9.7e-112,
                        "ievalue": 2.4e-109,
                        "score": 365.5,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 2267,
                        "length": 73,
                        "cevalue": 8.2e-11,
                        "ievalue": 2.3e-08,
                        "score": 33.6,
                        "hmm_length": 70,
                        "hmm_start": 7,
                        "hmm_end": 70,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 2375,
                        "length": 285,
                        "cevalue": 1.4e-41,
                        "ievalue": 8.2e-39,
                        "score": 133.2,
                        "hmm_length": 284,
                        "hmm_start": 2,
                        "hmm_end": 282,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 2878,
                        "length": 69,
                        "cevalue": 2e-10,
                        "ievalue": 5.5e-08,
                        "score": 32.4,
                        "hmm_length": 70,
                        "hmm_start": 3,
                        "hmm_end": 68,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 2980,
                        "length": 300,
                        "cevalue": 3.9e-38,
                        "ievalue": 2.3e-35,
                        "score": 121.8,
                        "hmm_length": 284,
                        "hmm_start": 2,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 3482,
                        "length": 507,
                        "cevalue": 1.6e-120,
                        "ievalue": 3.9e-118,
                        "score": 394.5,
                        "hmm_length": 475,
                        "hmm_start": 2,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 4052,
                        "length": 75,
                        "cevalue": 1.7e-15,
                        "ievalue": 4.8e-13,
                        "score": 48.6,
                        "hmm_length": 70,
                        "hmm_start": 3,
                        "hmm_end": 70,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 4148,
                        "length": 289,
                        "cevalue": 2.6e-33,
                        "ievalue": 1.6e-30,
                        "score": 106.0,
                        "hmm_length": 284,
                        "hmm_start": 1,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 4609,
                        "length": 90,
                        "cevalue": 1.4e-14,
                        "ievalue": 8.4e-12,
                        "score": 44.5,
                        "hmm_length": 284,
                        "hmm_start": 2,
                        "hmm_end": 76,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 4711,
                        "length": 162,
                        "cevalue": 8.3e-31,
                        "ievalue": 4.9e-28,
                        "score": 97.8,
                        "hmm_length": 284,
                        "hmm_start": 139,
                        "hmm_end": 284,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 5090,
                        "length": 494,
                        "cevalue": 1.7e-112,
                        "ievalue": 4.2e-110,
                        "score": 368.0,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    }
                ]
            },
            {
                "id": "MGG_15248T0",
                "sequence": "MDAAGHDGVICIDMLSCAALVLGKPLDDVDLQKSFVVNGGDSLRAILLQSMLREHGYNITREDLLTSPTIGDVFRDGACTRPPLDQATSWVSSSNNSHPDTDSSGRASSSSAASSSPVSASQWAGSLQSLGEAHLRAGQATDGSHRNQVYDLLTELQLSLVHETITHCGSNIITYSELHHPKSAETYRKAWIQVLNDEAIFKRCCLGPLFSKQGRAADADVAGLTLDGSTGLDSEWPGWSLEMCRAGKTTDDGMEELMEITFKVHHALIDASSLEALVSKVRARANGMQTKPGTSFWDWALLLRHHQQDHKAEGDKFWAQTMVKHPDAKGHMALPTPARTLQFEAEVKRHDFSVNAEAIQVRARGLGVTPAAIFYAGWALVVVTYADSDSVVFGSVLSGRGLGVPDSLDAIGPLINVLPLHVAVCRDAPLRDFVWGLFVDTVNLEALAWTSTENGFRRDYESALSVQLQLPEAVDGSHPAANTYQAMPVSHSSCQQSRVPISVTVKDASRVTIDFHSSRYGSRDARLVADCYERALDMMLTVDGKVDDAMQGLLSCQSYSQLMRWGNCITGLTTRASVKDDLVTLFEAAAEANSQRTALEKGDRTMTYAELQTRSTAICDVLAPVVTEGDVVCVHSDRSLEWICAIWGILKAGCTYCSLDPQLTAAWRESMAEAVSATAFITATTEQLDEWRPRHVRLAFSVESVPGCAQADASTTTPVPRTPRPHWPAYICFTSGSTGVPKPVVCTHAGLVAFQRDPTVRLGAKPGVRVSQIMSVAFDGSIHEIFSALTYGATLVLPACSRDVLSVLGKVDSAVFTPSIARALQPADFPGLQTVYLVGEPVPQAVADAWSACKDVYNMYGPTEATCGATIKRLRSGQDVNIGRPNPSTRVYVLNSSGGLSQPGMVGRIHLAGVQVSRGYHGMPEQTGAVFRPDQVMDNGEMSYDTGDMGYWDEHGDLVCVGRRDRQVKLRGYRVELNDLEIRIAETVPEANAVAVAVRKGLVDELLVMVQPGGLDIAAMRSRLEATFPRYLLPGHIVAVDAIPTTPAGKIDYKAIAQVEIGADAAVAPSAPAAGMEEVVAAAFCAVLQRPAARWPIDRNQSLGELGGHSMEQIKLARHLAKTLGIPVSLRTVISNPSIKALAGAIDQSRAGLSLASATTETPPVPESVTPIEADWLEKYRVSSGTSCFNVSSLHRFEPDRVDVDRLERALNGVLQRHPVLRGTYISSRAPRRPEYRRILTRHYPRVQRLRTVDVWLELNRPFQPHQEHPVRVVLADDTLLVVMSHIAADYTALATVLREASVLYTGAELPVPSAGAAYPAQQLCGVELTEETKKYWLSTLSDVPAPCGILSSVPRRTSYLGRSIVYELDKATSRQILACRSSHFVSLQHLGMAAVALGLVNQRPGEPKDHVDVMIGVPYINRGSTEQMETVGLFLQPLPVRIKYDRAPENVDTLLREVQQATQAALARGLPWHQLLDLARCIPDYPDHPLFDVMVSFHEPEMIQQLRMDIPTLEPCFAWSSGAKFKMMCEFTAVAGDCVVLRVEYDDGCINEESLRGFVEDVAAALHTLTSRSDARDPASSQRRGRLTGGFRDEKTLLGRRLSDWANLAT",
                "length": 1612,
                "architectures_nb": 1,
                "domains": [
                    {
                        "name": "PP-binding",
                        "start": 10,
                        "length": 66,
                        "cevalue": 5.2e-12,
                        "ievalue": 1.5e-09,
                        "score": 37.4,
                        "hmm_length": 70,
                        "hmm_start": 8,
                        "hmm_end": 66,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 152,
                        "length": 274,
                        "cevalue": 3.2e-40,
                        "ievalue": 1.9e-37,
                        "score": 128.7,
                        "hmm_length": 284,
                        "hmm_start": 87,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    },
                    {
                        "name": "A",
                        "start": 606,
                        "length": 447,
                        "cevalue": 7.5e-118,
                        "ievalue": 1.9e-115,
                        "score": 385.7,
                        "hmm_length": 475,
                        "hmm_start": 1,
                        "hmm_end": 475,
                        "color": "darkorchid",
                        "status": "likely"
                    },
                    {
                        "name": "PP-binding",
                        "start": 1075,
                        "length": 72,
                        "cevalue": 2.7e-14,
                        "ievalue": 7.7e-12,
                        "score": 44.7,
                        "hmm_length": 70,
                        "hmm_start": 2,
                        "hmm_end": 70,
                        "color": "maroon",
                        "status": "likely"
                    },
                    {
                        "name": "C",
                        "start": 1166,
                        "length": 281,
                        "cevalue": 5.2e-39,
                        "ievalue": 3.1e-36,
                        "score": 124.7,
                        "hmm_length": 284,
                        "hmm_start": 5,
                        "hmm_end": 283,
                        "color": "navajowhite",
                        "status": "likely"
                    }
                ]
            }
        ]
    }
]

// var families = $FAM_LIST

// constant variables used to draw svg proteins
const margin = {"top": 0, "right": 5, "bottom": 0, "left": 10};
const width = 650 - margin.left - margin.right;
const height = 60 - margin.top - margin.bottom;
const y_line = (height + margin.top + margin.bottom)/2;
const rect_height = 12;
const y_rect = y_line - rect_height/2;


// d3.json("./data.json").then(function(families) {

    // initialize the page with the content of the 1st element of families 
    initPage(families[0]);

    // list all family names in the panel "List of protein families"
    // each element is a <div class="nav-famlist"> 
    var famList = d3.select("#nav-content").selectAll("div")
        .data(families)
        .enter().append("div")
            .attr("class", "nav-famlist")
            .style("display", "block")
            .style("text-align", "left")
            .text(function (d) {
                return d.name;
            })

    // add the class "fam-selected" to the first element of the class "nav-famlist"
    d3.select(".nav-famlist").classed("fam-selected", true);

    // change text size and style of nav-famlist elements when hovering over
    famList.on("mouseover", function () {
        d3.select(this)
            .style("cursor", "pointer")
            .style("font-size", "14px")
            .style("font-style", "italic")
    }) 

    // restaure text size and style of nav-famlist elements when mouse out
    famList.on("mouseout", function () {
        d3.select(this).style("color", "black")
            .style("font-size", "13px")
            .style("font-style", "normal")
    })

    // manage click event happening on nav-famlist elements
    famList.on("click", function() {
        // add fam-selected class to the element clicked only
        d3.selectAll(".fam-selected").classed("fam-selected", false);
        d3.select(this).classed("fam-selected", true)

        // write name of the family in rule definition header 
        d3.select("#rule-summary .subtitle-header span").select("text").remove()
        d3.select("#rule-summary .subtitle-header span")
        .text(this.__data__.name)

        // write name of the family in domain architecture header
        d3.select("#proteins-container .subtitle-header span").select("text").remove()
        d3.select("#proteins-container .subtitle-header span")
        .text(this.__data__.name)

        updateRuleSummary(this.__data__.rules);
        rmProteins();
        drawProteins(this.__data__.proteins);
        updateDetails(this.__data__.proteins[0]);

    })

    d3.select("button.sequence").on("click", function () {
        var duration_time = 275;
        tt_sequence = d3.select(".tooltip-sequence")

        d3.selectAll(".panel").style("z-index", "1")

        tt_sequence.style("visibility", "visible");


        d3.select(".hiding-panel")
            .style("z-index", "2")
            .style("display", "initial")
            .transition().duration(duration_time)
                .style("opacity", "0.65")


        if (d3.select(".hiding-panel").style("display") == "initial") {

            d3.select(".hiding-panel").on("click", function() {
                d3.select(".hiding-panel")
                    .style("display", "none")
                    .style("z-index", "-1")

                tt_sequence.style("visibility", "hidden");

                setTimeout(function () {
                    d3.select(".hiding-panel")
                        .style("display", "none");
                    }, 0);        
            })

            d3.select("#close-tt-seq").on("click", function() {                
                d3.select(".hiding-panel")
                    .style("display", "none")
                    .style("z-index", "-1")

                tt_sequence.style("visibility", "hidden");

                setTimeout(function () {
                    d3.select(".hiding-panel")
                        .style("display", "none");
                    }, 0);        
            })

                
        }
    })

    d3.selectAll(".infobox").on("click", function() {
        var infobox = this;
        var duration_time = 0;
        var grandParent = this.parentNode.parentNode

        d3.selectAll(".panel").style("z-index", "1")

        var selected_fam = d3.select("#rule-summary .subtitle-header span").text()
        d3.selectAll(".infobox .sp-rulename")
            .text(selected_fam);

        d3.select(infobox).select(".infotext")
            .style("visibility", "visible")

        d3.select(".hiding-panel")
            .style("z-index", "2")
            .style("display", "initial")
            .transition().duration(duration_time)
                .style("opacity", "0.65")

        d3.select(grandParent)
            .style("z-index", "5")
            .style("background-color", "white")
    
        if (d3.select(".hiding-panel").style("display") == "initial") {            

            d3.select(grandParent).select(".infobox-footer span").on("click", function() {                
                d3.select(".hiding-panel")
                    .transition().duration(duration_time)
                        .style("z-index", "-1")
                        // .style("opacity", "0.0")

                d3.select(infobox).select(".infotext")
                .transition().duration(duration_time)
                    .style("visibility", "hidden");

                setTimeout(function () {
                    d3.select(".hiding-panel")
                        .style("display", "none");
                    }, duration_time);        
                })

            d3.select(".hiding-panel").on("click", function() {
                d3.select(".hiding-panel")
                    .transition().duration(duration_time)
                        .style("z-index", "-1")
                        // .style("opacity", "0.0")

                d3.select(infobox).select(".infotext")
                .transition().duration(duration_time)
                    .style("visibility", "hidden");

                setTimeout(function () {
                    d3.select(".hiding-panel")
                        .style("display", "none");
                    }, duration_time);        
                })
                    
            }
    })
// });


function initPage(data) {
    d3.selectAll(".sp-rulename")
        .text(data.name);

    updateRuleSummary(data.rules);
    updateDetails(data.proteins[0]);
    drawProteins(data.proteins);
}


function drawProteins(data) {
    var proteins = data
    var protein_length = proteins.map(function(d) {return +d.length;})

    var scale = d3.scaleLinear()
        .domain([0, d3.max(protein_length)])
        .range([0, width]);

    // proteins-draw is the container in which proteins are drawn
    var div = d3.select("#proteins-draw").selectAll("div")
                .data(proteins)
                .enter().append("div")
                    .attr("class", "protein")

    // var subdiv = div.append("div")
    //     .attr("class", "protein-descr")
    //     .text(d => {
    //         return `${d.id} (${d.length} aa)`;
    //     })
    //     .style("font-weight", "bold")

    var subdiv = div.append("div")
        .attr("class", "protein-descr")

    subdiv.append("div")
        .text(d => {
            return `${d.id} (${d.length} aa)`;
        })
        .style("font-weight", "bold")

    d3.select(".protein-descr ").classed("selected", true);

    var svg = subdiv.append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)

    var g = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .attr("class", d => d.id)

    g.append("line")
        .attr("x1", scale(1))
        .attr("y1", y_line)
        .attr("x2", d => scale(+d.length))
        .attr("y2", y_line)
        .attr("stroke", "black")
        .attr("stroke-width", "2")

    var rect = g.selectAll("rect")
                .data(d => d.domains)
                .enter().append("rect")
                    .attr("x", d => scale(d.start))
                    .attr("y", y_rect)
                    .attr("height", rect_height)
                    .attr("width", d => scale(d.length))
                    .attr("fill", d => d.color)
                    .attr("stroke", "black")
                    .attr("stroke-width", "1.25")
                    .attr("fill-opacity", 0.85)
                    .attr("rx", "8")
                    .attr("ry", "8")
                    .attr("id", function(d) {
                        var end = d.start + d.length - 1;
                        return `rect_${d.name}_${d.start}-${end}`; 
                    })
                    .style("visibility", function(d) {
                        if (d.status) {
                            if (d.status === "unlikely") {
                                return "hidden";
                            } else {
                                return "visible";
                            }
                        } else {
                            return "visible";
                    }})        

    rect.append("title")
        .text(d => `${d.name} (${d.length} aa)`)

    subdiv.on("click", function() {
        d3.selectAll(".selected").classed("selected", false);
        d3.select(this).classed("selected", true);

        updateDetails(this.__data__);
    })
    
    rect.on("mouseenter", function(event, d) {
        d3.select(`#${d.name}-${d.start}`).selectAll("td")
            .style("border-color", "black")
            .style("border-width", "2px")
            .style("font-weight", "bold")
            .classed("rect-hovered", true)
        })

    rect.on("mouseleave", function(event, d) {   
        d3.select(`#${d.name}-${d.start}`).selectAll("td")
            .style("border-width", "1px")
            .style("font-weight", "normal")
            .classed("rect-hovered", false);
    })
}


function rmProteins() {
    d3.select("#proteins-draw").selectAll(".protein").remove()
}


function updateDetails(protein){
    var BLAST_URL = "https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE=Proteins&PROGRAM=blastp&BLAST_PROGRAMS=blastp&QUERY=MYSEQ&LINK_LOC=protein&PAGE_TYPE=BlastSearch"
    
    d3.select("form").attr("action", `${BLAST_URL}`.replace("MYSEQ", protein.sequence))

    d3.select("#p-sequence").text(protein.sequence)
    

    var domNbMLA = d3.sum(protein.domains.map(function(d) {
        if (d.status === "likely") {
            return 1;
        }
        else { return 0; }
    }))

    d3.selectAll(".p-id").text(protein.id)
    d3.select("#p-length").text(`${protein.length} amino acids`)
    d3.select("#p-domainInArch").text(domNbMLA)
    
    d3.select("#p-totalDomain").text(`${protein.domains.length}`)


    d3.select("#detail-hmmdomtbl tbody").selectAll("tr").remove()
    var rows = d3.select("#detail-hmmdomtbl tbody").selectAll("tr")
        .data(protein.domains)
        .enter().append("tr")
            .attr("id", function(d) {return `${d.name}-${d.start}` })
            .attr("class", d => d.status)

    rows.append("td").text(function(d) {return d.name})
    rows.append("td").text( d => d.start)
    rows.append("td").text( d => (d.start+d.length-1))
    rows.append("td").text( d => d.cevalue)
    rows.append("td").text( d => d.ievalue)
    rows.append("td").text( d => d.score)
    rows.append("td").text( d => d.hmm_length)
    rows.append("td").text( d => d.hmm_start)
    rows.append("td").text( d => d.hmm_end)


    rows.on("mouseenter", function(event, d) {
        d3.select(this).selectAll("td")
            .style("border-color", "black")
            .style("border-width", "2px")
            .style("font-weight", "bold")
            .classed("rect-hovered", true)

        d3.select(`g.${protein.id}`).selectAll("rect")
            .attr("opacity", "0.175")

        d3.select(`g.${protein.id}`).select("line")
            .attr("opacity", "0.4")

        var end = d.start + d.length - 1;
        d3.select(`#rect_${d.name}_${d.start}-${end}`)
            .attr("stroke-width", "2")
            .attr("opacity", "0.985")
            .style("visibility", "visible")
    })

    rows.on("mouseout", function(event, d) {
        d3.select(this).selectAll("td")
        .style("border-width", "1px")
        .style("font-weight", "normal")
        .classed("rect-hovered", false);
        
        d3.select(`g.${protein.id}`).selectAll("rect")
            .attr("opacity", "1")
            .attr("fill-opacity", "0.85")

        d3.select(`g.${protein.id}`).select("line")
            .attr("opacity", "1")

        var end = d.start + d.length - 1;
        d3.select(`#rect_${d.name}_${d.start}-${end}`)
            .attr("stroke-width", "1.25")
            .style("visibility", function(d) {
                if (d.status) {
                    if (d.status === "unlikely") {
                        return "hidden";
                    } else {
                        return "visible";
                    }
                } else {
                    return "visible";
            }})
    })

}


function updateRuleSummary(rules) {
    d3.selectAll(".rule-table").selectAll("td").remove()

    d3.select(".rule-table .tr-name").selectAll("td")
        .data(rules.mandatories)
        .enter().append("td")
        .text(d => d.name)

    var legend = d3.select(".rule-table .tr-legend").selectAll("td")
    .data(rules.mandatories)
    .enter().append("td")

    legend.append("svg")
        .attr("width", 50)
        .attr("height", 20)
        .append("rect")
            .attr("x", 9)
            .attr("y", 4)
            .attr("height", "14")
            .attr("width", "40")
            .attr("fill", d => d.color)
            .attr("stroke", "black")
            .attr("fill-opacity", "0.85")
            .attr("rx", "8")
            .attr("ry", "8")

    d3.select(".rule-table .tr-cutoff").selectAll("td")
        .data(rules.mandatories)
        .enter().append("td")
        .text(d => d.evalue)

    if (rules.forbidden[0].name != "None") {
        d3.select('.rule-table.forbidden-list')
        .style("visibility", "visible")

        d3.select(".rule-table .tr-name-forb").selectAll("td")
        .data(rules.forbidden)
        .enter().append("td")
        .text(d => d.name)

        var legend = d3.select(".rule-table .tr-legend-forb").selectAll("td")
        .data(rules.forbidden)
        .enter().append("td")

        legend.append("svg")
            .attr("width", 50)
            .attr("height", 20)
            .append("rect")
                .attr("x", 9)
                .attr("y", 4)
                .attr("height", "14")
                .attr("width", "40")
                .attr("fill", d => d.color)
                .attr("stroke", "black")
                .attr("fill-opacity", "0.85")
                .attr("rx", "8")
                .attr("ry", "8")
    } else {
        d3.select('.rule-table.forbidden-list')
            .style("visibility", "hidden")
    }
}

