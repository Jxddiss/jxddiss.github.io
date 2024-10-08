import { AsciiMorph } from "./lib/asciiMorph.min.js";

const asciiArtContainer = document.querySelector(".ascii-art-container");
AsciiMorph(asciiArtContainer, {
  x: 100,
  y: 15,
});
// source : https://www.asciiart.eu/
let asciisGallery = [
  [
    "                _ooOoo_",
    "               o8888888o",
    '               88" . "88',
    "               (| -_- |)",
    "               O\\  =  /O",
    "            ____/`---'\\____",
    "          .'  \\\\|     |//  `.",
    "         /  \\\\|||  :  |||//  \\",
    "        /  _||||| -:- |||||_  \\",
    "        |   | \\\\\\  -  /'| |   |",
    "        | \\_|  `\\`---'//  |_/ |",
    "        \\  .-\\__ `-. -'__/-.  /",
    "      ___`. .'  /--.--\\  `. .'___",
    '   ."" \'<  `.___\\_<|>_/___.\' _> \\"".',
    "  | | :  `- \\`. ;`. _/; .'/ /  .' ; |",
    "  \\  \\ `-.   \\_\\_`. _.'_/_/  -' _.' /",
    "===`-.`___`-.__\\ \\___  /__.-'_.'_.-'===",
    "                `=--=-'                    hjw",
  ],
  [
    "      \\`.     ___",
    "       \\ \\   / __>0",
    "   /\\  /  |/' / ",
    "  /  \\/   `  ,`'--.",
    " / /(___________)_ \\",
    " |/ //.-.   .-.\\\\ \\ \\",
    " 0 // :@ ___ @: \\\\ /",
    "   ( o ^(___)^ o ) 0",
    "    \\ \\_______/ /",
    "/\\   '._______.'--.",
    "\\ /|  |<_____>    |",
    " \\ \\__|<_____>____/|__",
    "  \\____<_____>_______/",
    "      |<_____>    |",
    "      |<_____>    |",
    "      :<_____>____:",
    "     / <_____>   /|",
    "    /  <_____>  / |",
    "   /___________/  |",
    "   |           | _|__",
    "   |           | ---||_",
    "   |   |L\\/|/  |  | [__]",
    "   |  \\|||\\|\\  |  /",
    "   |           | /",
    "   |___________|/",
  ],
  [
    "                    ()                    ",
    "                 __/\\__                  ",
    '        |\\   .-"`      `"-.   /|         ',
    "        | \\.'( ') (' ) (. )`./ |         ",
    "         \\_                  _/          ",
    "           \\  `~\"'=::='\"~`  /            ",
    "    ,       `-.__      __.-'       ,     ",
    '.---\'\\________( `""~~""` )________/\'---. ',
    ' >   )       / `""~~~~""` \\       (   <  ',
    "'----`--..__/        -(-)- \\__..--`----' ",
    "            |_____ __ _____|             ",
    "            [_____[##]_____]  I HAVE BEEN CHOSEN... ",
    "            |              |    FAREWELL MY FRIENDS... ",
    "            \\      ||      /     I GO ONTO A BETTER PLACE! ",
    "       jgs   \\     ||     /                  ",
    '          .-"~`--._||_.--\'~"-.               ',
    '         (_____,.--""--.,_____)              ',
  ],
  [
    "     .--------.",
    "    / .------. \\",
    "   / /        \\ \\",
    "   | |        | |",
    "  _| |________| |_",
    ".' |_|        |_| '.",
    "'._____ ____ _____.'",
    "|     .'____'.     |",
    "'.__.'.'    '.'.__.'",
    "'.__  |      |  __.'",
    "|   '.'.____.'.'   |",
    "'.____'.____.'____.'",
    "'.________________.'",
  ],
  [
    ' _________        .---"""      """---.              ',
    ":______.-':      :  .--------------.  :             ",
    "| ______  |      | :                : |             ",
    "|:______B:|      | |  Little Error: | |             ",
    "|:______B:|      | |                | |             ",
    "|:______B:|      | |  Power not     | |             ",
    "|         |      | |  found.        | |             ",
    "|:_____:  |      | |                | |             ",
    "|    ==   |      | :                : |             ",
    "|       O |      :  '--------------'  :             ",
    "|       o |      :'---...______...---'              ",
    "|       o |-._.-i___/'             ._        ",
    "|'-.____o_|   '-.   '-...______...-'  `-._          ",
    ":_________:      `.____________________   `-.___.-. ",
    "                 .'.eeeeeeeeeeeeeeeeee.'.      :___:",
    "               .'.eeeeeeeeeeeeeeeeeeeeee.'.         ",
    "              :____________________________:       ",
  ],
  [
    '                             .-"""-.    __                         ',
    "                             /       \\.q$$$$p.                      ",
    "                         __:  db     $$$$$$$$b.                    ",
    '                  _._.-""  :  $"b.   :$$$S$$$$$b                   ',
    '                .\'   "-.  "   T. `b d$$$S$S$$$$P^.              .-,',
    "    .qp.       :        `.     TsP' TSSS$P'S$P'   `.            `dP",
    " ,q$$$$$b      ;b         \\  '.     /\"T$P  :P       `.      __ dP_,",
    ' :$$$$SS$b_    $$b.  __.   ;_  `-._/   Y    \\         `.   ( dP".;',
    " $$$$$$$S$$b.  :S$$$p._    $$$$p./      ;    \"-._       `--dP .'  ;",
    ':$$$$P^^TS$$$b  SS$$$$$$   \'T$$$$b.     ;        ""--.   dP  /   / ',
    '$$$$P    :$$$$bd$SSS$$$;\\  . "^$$$$b___/            __\\dP .-"_.-"  ',
    '$$$P     $$$$$$b`T$SSS$  "-.J   "^T$/  ""-._       ( dP\\ /   /     ',
    ':$$      ; T$$$$b.`T$$;     d$+.     ""-.   ""--.._dP-, `._."      ',
    " T;     :   T$$$$$b.`^'   _d$P .$p.___   \"         \\`-'            ",
    '  `.    ;    T$$$$$$b._.dS$$$ :$$$b"--..__..---g,   \\              ',
    '    `. :      $$$$$$$$$$S$$$P\\ TP^"\\       ,-dP ;    ;             ',
    "      \\;   .-'$$$$$$$SSSP^^\"  \\     `._,-.-dP-' |    ;             ",
    '       :     :"^^"" """        `.   `._:\'.`.\\   :    ;\\            ',
    '        \\  , :              bug  "-. (,j\\ ` /   ;\\(// \\\\           ',
    '         `:   \\                     "dP__.-"    \'-\\\\   \\;          ',
    "           \\   :                .--dP,             \\;              ",
    "            `--'                `dP`-'                              ",
    "                              .-j                                   ",
    "                              `-:_                                  ",
    "                                 \\)                                 ",
    "                                  `--'                              ",
  ],
  [
    "       //:::::::::::::::::::::::::::::::::::::::::::::\\",
    "    //:::_______:::::::::________::::::::::_____:::::::\\",
    '  //:::_/   _-"":::_--"""        """--_::::\\_  ):::::::::\\',
    ' //:::/    /:::::_"                    "-_:::\\/:::::|^\\:::\\',
    "//:::/   /~::::::I__                      \\:::::::::|  \\:::\\",
    '\\\\:::\\   (::::::::::""""---___________     "--------"  /::://',
    ' \\\\:::\\  |::::::::::::::::::::::::::::""""==____      /::://',
    '  \\\\:::"\\/::::::::::::::::::::::::::::::::::::::\\   /~::://',
    "    \\\\:::::::::::::::::::::::::::::::::::::::::::)/~::://",
    '      \\\\::::""""""------_____::::::::::::::::::::::://',
    '        \\\\:::"\\               """""-----_____:::::://',
    '          \\\\:::"\\    __----__                )::://',
    '            \\\\:::"\\/~::::::::~\\_         __/~:://',
    '              \\\\::::::::::::::::""----""":::://',
    "                \\\\::::::::::::::::::::::::://",
    '                  \\\\:::\\^""--._.--""^/::://',
    '                    \\\\::"\\         /":://',
    '                      \\\\::"\\     /":://',
    '                        \\\\::"\\_ /":://',
    "                          \\\\::::://",
    "                            \\\\_//",
    '                              "',
  ],
  [
    "           0 _____                       ",
    "           X_____\\                      ",
    "   .-^-.  ||_| |_||  .-^-.               ",
    "  /_\\_/_\\_|  |_|  |_/_\\_/_\\             ",
    "  ||(_)| __\\_____/__ |(_)||             ",
    "  \\/| | |::|\\```/|::| | |\\/             ",
    "  /`---_|::|-+-+-|::|_---'\\            ",
    " / /  \\ |::|-|-|-|::| /  \\ \\           ",
    "/_/   /|`--'-+-+-`--'|\\   \\_\\          ",
    "| \\  / |===/_\\ /_\\===| \\  / |         ",
    "|  \\/  /---/-/-\\-\\  o\\  \\/  |        ",
    "| ||| | O / /   \\ \\   | ||| |          ",
    "| ||| ||-------------|o|||| |          ",
    "| ||| ||----\\ | /----|o|||| |          ",
    "| _|| ||-----|||-----|o|||_ |          ",
    "\\/|\\/  |     |||     |o|\\/|\\/         ",
    "\\_o/   |----|||||----|-' \\o_/         ",
    "       |##  |   |  ##|                 ",
    "       |----|   |----|                 ",
    "       ||__ |   | __||                 ",
    "      [|'  `|] [|'  `|]                ",
    "      [|`--'|] [|`--'|]                ",
    "      /|__| |\\ /| |__|\\              ",
    "      ||  | || || |  ||               ",
    "      ||__|_|| ||_|__||               ",
    "      ||    || ||    ||               ",
    "      \\|----|/ \\|----|/    -- Jay Thaler ",
    "      /______\\ /______\\              ",
    "      |__||__| |__||__|              ",
  ],
  [
    "__ _____ ____ _____ ______ _______ _____ ______ ______ ______ ___",
    "__]_____]____]_____]______]_______]_____]______]______]______]___]",
    '             _                       _______  |||"||;;|.||##||=|||',
    "  _                           _     |   *  3| |||-|| =|-||==||+|||",
    "  ____________       _              |       | |||_||__|_||__||_|||",
    "|`.   --__     `.        _______    |       | ||================||",
    "|  `._____________`.  .'|.-----.|   _ ======| ||| | -|&|^^|!!|-|||",
    "|   | .-----------.| |  ||     ||  (o))   _ | ||| |**|=|+-|##|=|||",
    "|   | |  .-------.|| |  ||     ||  /||   / \\`._|  .-.|_|__|__|_|||",
    "|   | |  |       |||_`..|'_____'| //||___\\_/.'\\| (( ))==========||",
    "|   | |`.|  ==== ||| | `---------(o)||         \\  /-'-=|+|.-|-'|||",
    "|`. | |`.|_______|||/|______________||__.--._ (o)/|=|;:|-|&&|&&|||",
    "|  `|_|===========||_|                 (____)-.'(o)_|__|_|__|__|||",
    "|   | |  .-------.||                           `._\\=============||",
    "|   | |  |       |||                             `.     |       ||",
    "|   | |`.|  ==== |||`._____________________________`.  o|o      ||",
    "|`. | |`.|_______||| |._.----------------.__.-------.|__|_______||",
    "|  `|_|===========|| || '----------------'  | .---. ||  __",
    "|   | |  .-------.|| ||               |     |_______||.'\\.'",
    "|   | |  |       ||| || ______________|     | .---. ||'.__.'",
    "|   | |`.|  ==== ||| ||                `.   |_______|||  _ |",
    " `. | |`.|_______||| ||                  `. | .---. |||_  ||",
    "   `|_|========LGB||`||                    `|_______|||____|",
    "                       `.                    `.",
    "                         `.____________________`.",
  ],
  [
    "                ,,ggddY888Ybbgg,,                  ",
    '          ,agd8""\'   .d8888888888bga,              ',
    '       ,gdP""\'     .d88888888888888888g,           ',
    '     ,dP"        ,d888888888888888888888b,         ',
    '   ,dP"         ,8888888888888888888888888b,       ',
    '  ,8"          ,8888888P"""88888888888888888,      ',
    " ,8'           I888888I    )88888888888888888,     ",
    ",8'            `8888888booo8888888888888888888,    ",
    "d'              `88888888888888888888888888888b    ",
    '8                `"8888888888888888888888888888    ',
    '8                  `"88888888888888888888888888    ',
    '8                      `"8888888888888888888888    ',
    "Y,                        `8888888888888888888P    ",
    "`8,                         `88888888888888888'    ",
    " `8,              .oo.       `888888888888888'     ",
    "  `8a             8888        88888888888888'      ",
    "   `Yba           `\"\"'       ,888888888888P'      ",
    "     \"Yba                   ,88888888888'         ",
    '       `"Yba,             ,8888888888P"\'          ',
    '          `"Y8baa,      ,d88888888P"\'             ',
    '               `""YYba8888P888"\'                  ',
  ],
  [
    "                      `. ___                          ",
    "                    __,' __`.                _..----....____",
    "        __...--.'``;.   ,.   ;``--..__     .'    ,-._    _.-'",
    "  _..-''-------'   `'   `'   `'     O ``-''._   (,;') _,'    ",
    ",'________________                          \\`-._`-',       ",
    " `._              ```````````------...___   '-.._'-:         ",
    "    ```--.._      ,.                     ````--...__\\-.    ",
    "            `.--. `-`                       ____    |  |`   ",
    "              `. `.                       ,'`````.  ;  ;`   ",
    "                `._`.        __________   `.      \\'__/`    ",
    "                   `-:._____/______/___/____`.     \\  `     ",
    "                               |       `._    `.    \\      ",
    "                               `._________`-.   `.   `.___  ",
    "                                             SSt  `------'` ",
  ],
  [
    "            #### ##### ##### ###  ##### ###                             ",
    "            ##  ####  ##### ###### #####  ###                          ",
    "               ####  ####  ########  ####  ####                        ",
    "             #####  ####  ####  ##### ##### ####                       ",
    "            ##### ##### ##### ## ##### #####  ####                     ",
    "            ###  ####  ##### ####  ####  ####  ###                     ",
    "            ##  ####  ####  ######  ####  ####  ##                     ",
    "              ##### ##### ########## ##### ##### ##                    ",
    "             ####  ##### #####  ##### #####  ####                      ",
    "            ####  ####  ####  ##  ####  ####  ####                     ",
    "            ### ##### #####  ####  ####  ##### ###                     ",
    "            #  ####  ##### ######## ##### #####  #                     ",
    "              ####  ####  #### #####  ####  ####                       ",
    "            ##### ##### #####    ####  ####  ###                       ",
    "            ###  ##### ##### #### ##### #####                          ",
    "            ##  ####  ####  ###### #####  ##                           ",
    "              ##### #####  ########  ####                              ",
    "             ##### ##### #####  ##### #####                            ",
    "            ####  ####  ##### ## #####  ####                           ",
    "            ###  ####  ####  ####  ####  ####                          ",
    "            ## ##### #####  ######  ##### #####                        ",
    "              ##### ##### ########## #####  ####                       ",
    "             ####  ####  #####  #####  ####  ####                      ",
    "            ####  ####  ####  ##  ####  ##### #####                    ",
    "            ### ##### #####  ####  ##### ##### #####                   ",
    "            #  ####  ##### ######## #####  ####  ####                  ",
  ],
  [
    "D.H., 1991           __gggrgM**M#mggg__",
    '                __wgNN@"B*P""mp""@d#"@N#Nw__',
    "              _g#@0F_a*F#  _*F9m_ ,F9*__9NG#g_",
    '           _mN#F  aM"    #p"    !q@    9NL "9#Qu_',
    '          g#MF _pP"L  _g@"9L_  _g""#__  g"9w_ 0N#p',
    '        _0F jL*"   7_wF     #_gF     9gjF   "bJ  9h_',
    "       j#  gAF    _@NL     _g@#_      J@u_    2#_  #_",
    '      ,FF_#" 9_ _#"  "b_  g@   "hg  _#"  !q_ jF "*_09_',
    '      F N"    #p"      Ng@       `#g"      "w@    "# t',
    '     j p#    g"9_     g@"9_      gP"#_     gF"q    Pb L',
    '     0J  k _@   9g_ j#"   "b_  j#"   "b_ _d"   q_ g  ##',
    '     #F  `NF     "#g"       "Md"       5N#      9W"  j#',
    '     #k  jFb_    g@"q_     _*"9m_     _*"R_    _#Np  J#',
    '     tApjF  9g  J"   9M_ _m"    9%_ _*"   "#  gF  9_jNF',
    '      k`N    "q#       9g@        #gF       ##"    "#j',
    '      `_0q_   "#q_    _&"9p_    _g"`L_    _*"#   jAF,\'',
    '       9# "b_j   "b_ g"    *g _gF    9_ g#"  "L_*"qNF',
    '        "b_ "#_    "NL      _B#      _I@     j#" _#"',
    '          NM_0"*g_ j""9u_  gP  q_  _w@ ]_ _g*"F_g@',
    '           "NNh_ !w#_   9#g"    "m*"   _#*" _dN@"',
    '              9##g_0@q__ #"4_  j*"k __*NF_g#@P"',
    '                "9NN#gIPNL_ "b@" _2M"Lg#N@F"',
    '                    ""P@*NN#gEZgNN@#@P""',
  ],
  [
    "  _______________________________",
    " /\\                              \\",
    "/++\\    __________________________\\",
    "\\+++\\   \\ ************************/",
    " \\+++\\   \\___________________ ***/",
    "  \\+++\\   \\             /+++/***/",
    "   \\+++\\   \\           /+++/***/",
    "    \\+++\\   \\         /+++/***/",
    "     \\+++\\   \\       /+++/***/",
    "      \\+++\\   \\     /+++/***/",
    "       \\+++\\   \\   /+++/***/",
    "        \\+++\\   \\ /+++/***/",
    "         \\+++\\   /+++/***/",
    "          \\+++\\ /+++/***/",
    "           \\+++++++/***/",
    "            \\+++++/***/",
    "             \\+++/***/",
    "              \\+/___/",
  ],
  [
    "               (( _______",
    "     _______     /\\O    O\\",
    "    /O     /\\   /  \\      \\",
    "   /   O  /O \\ / O  \\O____O\\ ))",
    "((/_____O/    \\\\    /O     /",
    "  \\O    O\\    / \\  /   O  /",
    "   \\O    O\\ O/   \\/_____O/",
    "    \\O____O\\/ )) mrf      ))",
    "  ((",
  ],
  [
    "                 _.--._",
    "                 _|__|_",
    "     _____________|__|_____________",
    "  .-'______________________________'-.",
    "  | |________POLICE___BOX__________| |",
    "  |  |============================|  |",
    "  |  | .-----------..-----------. |  |",
    "  |  | |  _  _  _  ||  _  _  _  | |  |",
    "  |  | | | || || | || | || || | | |  |",
    "  |  | | |_||_||_| || |_||_||_| | |  |",
    "  |  | | | || || | || | || || | | |  |",
    "  |  | | |_||_||_| || |_||_||_| | |  |",
    "  |  | |  _______  ||  _______  | |  |",
    "  |  | | |       | || |       | | |  |",
    "  |  | | |       | || |       | | |  |",
    "  |  | | |       | || |       | | |  |",
    "  |  | | |_______| || |_______| | |  |",
    "  |  | |  _______ @||@ _______  | |  |",
    "  |  | | |       | || |       | | |  |",
    "  |  | | |       | || |       | | |  |",
    "  |  | | |       | || |       | | |  |",
    "  |  | | |_______| || |_______| | |  |",
    "  |  | |  _______  ||  _______  | |  |",
    "  |  | | |       | || |       | | |  |",
    "  |  | | |       | || |       | | |  |",
    "  |  | | |       | || |       | | |  |",
    "  |  | | |_______| || |_______| | |  |",
    "  |  | '-----------''-----------' |  |",
    " _|__|/__________________________\\|__|_ LGB",
    "'----'----------------------------'----'",
  ],
  [
    "-------------------------------------------------------------------------,",
    "[] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [",
    "-----------------------------------------------------------------------/",
    "      \\|/ | O -   ^^         |                  |           _   _     |",
    "     --O--|/ \\        O  ^^  |   ^^   |||||     |     ___  ( ) ( )   _/ ",
    " /\\   /|\\ |         --|--    | ^^     |O=O|     |_ __/_|_\\,_|___|___/  ",
    "/  \\/\\    |~~~~~~~~~~~|~~~~~~|        ( - )     | `-O---O-'       |",
    "  /\\  \\/\\_|          / \\     |       .-~~~-.    | -- -- -- -- -- /",
    " /  /\\ \\  |         '   `    |      //| o |\\\\   |______________ |",
    "--------------------------------------------------------------_/ ",
    "[] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [",
    "------------------------------------------------------------'",
  ],
  [
    "              ,.  _~-.,               .",
    "           ~'`_ /,_. \\_",
    "          / ,'_>@`,__`~.)             |           .",
    "          | |  @@@@'  \",! .           .          '",
    "          |/   ^^@     .!  \\          |         /",
    "          `' .^^^     ,'    '         |        .             .",
    "           .^^^   .          \\                /          .",
    "          .^^^       '  .     \\       |      /       . '",
    ".,.,.     ^^^             ` .   .,+~'`^`'~+,.     , '",
    "&&&&&&,  ,^^^^.  . ._ ..__ _  .'             '. '_ __ ____ __ _ .. .  .",
    "%%%%%%%%%^^^^^^%%&&;_,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,",
    "&&&&&%%%%%%%%%%%%%%%%%%&&;,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=",
    "%%%%%&&&&&&&&&&&%%%%&&&_,.;^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__",
    "%%%%%%%%%&&&&&&&&&-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-==--^'~=-.,__,.-=~'",
    "##mjy#####*\"'",
    "_,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,.-=~'`^`'~=-.,__,.-=~'",
    "",
    "~`'^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^",
  ],
  [
    "                 '",
    "            *          .",
    "                   *       '",
    "              *                *",
    "",
    "",
    "",
    "",
    "   *   '*",
    "           *",
    "                *",
    "                       *",
    "               *",
    "                     *",
    "",
    "         .                      .",
    "         .                      ;",
    "         :                  - --+- -",
    "         !           .          !",
    "         |        .             .",
    "         |_         +",
    "      ,  | `.",
    "--- --+-<#>-+- ---  --  -",
    "      `._|_,'",
    "         T",
    "         |",
    "         !",
    "         :         . :",
    "         .       *",
    "",
    "Ojo",
  ],
  [
    "                                       .",
    "              . .                     -:-             .  .  .",
    "            .'.:,'.        .  .  .     ' .           . \\ | / .",
    "            .'.;.`.       ._. ! ._.       \\          .__\\:/__.",
    "             `,:.'         ._\\!/_.                     .';`.      . ' .",
    "             ,'             . ! .        ,.,      ..======..       .:.",
    "            ,                 .         ._!_.     ||::: : | .        ',",
    "     .====.,                  .           ;  .~.===: : : :|   ..===.",
    "     |.::'||      .=====.,    ..=======.~,   |\"|: :|::::::|   ||:::|=====|",
    '  ___| :::|!__.,  |:::::|!_,   |: :: ::|"|l_l|"|:: |:;;:::|___!| ::|: : :|',
    ' |: :|::: |:: |!__|; :: |: |===::: :: :|"||_||"| : |: :: :|: : |:: |:::::|',
    ' |:::| _::|: :|:::|:===:|::|:::|:===F=:|"!/|\\!"|::F|:====:|::_:|: :|::__:|',
    " !_[]![_]_!_[]![]_!_[__]![]![_]![_][I_]!//_:_\\![]I![_][_]!_[_]![]_!_[__]!",
    " -----------------------------------\"---''''```---\"-----------------------",
    " _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |= _ _:_ _ =| _ _ _ _ _ _ _ _ _ _ _ _",
    "                                     |=    :    =|                Valkyrie",
    "_____________________________________L___________J________________________",
    "--------------------------------------------------------------------------",
  ],
  [
    "             8",
    "           .d8b.",
    "       _.d8888888b._",
    "     .88888888888888b.",
    "    d88888888888888888b",
    "    8888888888888888888",
    "    Y88888888888888888P",
    "     'Y8888888888888P'",
    "   _..._ 'Y88888P' _..._",
    " .d88888b. Y888P .d88888b.",
    "d888888888b 888 d88888888b",
    "888P  `Y8888888888P'  Y888",
    " b8b    Y88888888P    d8Y",
    "  `\"'  #############  '\"`",
    "         dP d8b Yb",
    "     Ob=dP d888b Yb=dO",
    '      `"` O88888O `"`',
    "   jgs     'Y8P'",
    "             '",
  ],
];

let currentIndex = 1;

setTimeout(function () {
  AsciiMorph.morph(asciisGallery[0]);
}, 1000);

setInterval(function () {
  AsciiMorph.morph(asciisGallery[currentIndex]);
  currentIndex++;
  if (currentIndex > asciisGallery.length - 1) {
    currentIndex = 0;
  }
}, 3000);
