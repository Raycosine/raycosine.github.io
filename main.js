let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_des = document.querySelector(".track-des");
let track_staff = document.querySelector(".track-staff");
let track_lyrics = document.querySelector(".track-lyrics");
let track_name = document.querySelector(".track-name");
//let track_artist = document.querySelector(".track-artist");
let track_list_info = document.querySelector(".track-list-info");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "碳基生物戒断电子宠物失败1例报告",
    path: "songs/碳基生物戒断电子宠物失败1例报告.mp3",
    description: "Tamagotchi效应是对机器、机器人或软件代理的情感依恋的发展。人们已经注意到，人类倾向于在情感上依附于没有任何情感的事物。例如，有些情况下，人们对使用汽车钥匙或虚拟宠物感到情绪激动。它在反映人类行为或特征的某些方面的应用中更为突出，尤其是在人工智能和自动化知识处理方面[1]。当人类产生过多依赖，这种情感也可能产生负面影响。我们报告1例碳基生物的电子宠物戒断失败情况，探讨其临床特征，提（扭）高（曲）医（一）务（般）人员对相关效应的认识。\n\n患者，人类，年龄prefer not to say。主诉从上世纪90年代起沉迷以拓麻歌子（电子宠物蛋）为典型的电子宠物，系同龄人群常见状况。患者既往无不良生活嗜好，无电子宠物沉迷家族史[2]。近年发现患者存在过度依赖，无法区分虚拟养成对象与现实的区别。更换游戏后，患者状况未改善，进一步丧失了对不同电子宠物的区分能力（“人和纸片人和宠物蛋分解了都是一样的基本粒子”——患者言）。\n\n[1] 维基百科的百度翻译（机翻）\n\n[2] 原因是90年代前没有电子宠物。",
    staff: "策划：王爱护\n\n填词：Raycosine\n\n歌手：Floats风千\n\n后期：花千涵\n\n美工：Raycosine\n\n出品：己酉社\n\n原曲：《amr!ta(不死)》\n\n原曲staff：\n\n作词 : 泠泠/瞳荧/月月YY/更知懒阳/言七序_/昔白/阿洲/三土基质/白衍/年华\n\n策划/作曲/美工：泠泠\n\n监制：洛甜甜\n\n分轨：泡菜\n\n贴唱：白茶Joe\n\nPV：潮Q\n\n画师：吞吞",
    lyrics: "时间辗转来到 下个世纪\n\n能宣判的只有 我的死去\n\n世界同样遗忘的你\n\n磨损的记忆晶体\n\n也许还刻录着最初相遇\n\n故事发生 在某个夏季\n\n我们还是 各自世界 中的孩子 \n\n你拥有最简单的分支判定\n\n我也未曾习得 常识定义\n\n你的轮回重置 只不过是\n\n程序设定\n\n但我依然唤你\n\n生与死之名\n\n虽然总是 注定拥有失去\n\n每一个重新生成的你\n\n我相信 始终是你\n\n我们曾用 八比特波形\n\n交换彼此讯息\n\n短暂触碰 外壳包裹下\n\n冰冷的内心\n\n当我忘记 最初那一个你\n\n不过是 又一次的死去\n\n等我们 再次相遇\n\n一切重启\n\n-M-\n\n我们都在逆着 混沌飞行\n\n褪去落后躯壳 升级载体\n\n商店之中 陈列排序\n\n我看到熟悉身影\n\n全新的面具下原来是「你」\n\n吻合的脉冲被传递\n\n华丽的触手捕获了完全注意\n\n你说要遵循着 从前「习性」\n\n于是我自觉奉上 所有数据\n\n它的初始设定 无法回忆\n\n拟合的 复制品\n\n占用了 所有\n\n精力\n\n索求预期 蔓生冗余期冀\n\n方寸之地 筋疲力尽\n\nta终于\n\n假象中沉溺\n\n训练暂停 当一无所有\n\n就让我被忘记\n\n人群之中 最寻常不过\n\n报废的感情\n\n当我们都 完全失去响应\n\n让思维飘荡在整个星际\n\n某一天 也许还可以 \n\n合二为一",
  },
  {
    name: "风入松",
    path: "songs/风入松.mp3",
    description: "\n\n庸人 空与扰扰较大椿\n山川风云 一般移换有死生\n若无心 来问我 作了几回冢中尘\n十二万岁 转眼又相逢",
    staff: "原曲:《宴清都》\n\n策划:翛念殇\n\n词作:Raycosine\n\n演唱:漠轻寒\n\n后期:林霰\n\n美工:GG-Bond\n\n出品：己酉社\n\n",
    lyrics: "危崖倚千尺 百丈伴寒藤\n\n山间每闻鬼语神嗔\n\n月落复日升 遍数昏共晨\n\n雪销春去逐飞轮\n\n历历如昨日 八千秋与春\n\n敢问天地何者为仁\n\n下视凡夫子 矫首语星辰\n\n看过多少去来身\n\n我为庸人 空与扰扰较大椿\n\n山川风云 一般移换有死生\n\n若无心 来问我 作了几回冢中尘\n\n十二万岁 转眼又相逢\n\n空谷穷山 犹飒飒送寒声\n\n还辩五株 孰为假真\n\n生之不遘时 去亦同飘尘\n\n西陵风雨夜来生\n\n深林幽薮 细草荫里付平生\n\n偃木横槎 明朝载波亦浮沉\n\n携残酒 倾玉山 人间一场风波梦\n\n跳出尘笼 寻我自在身\n\n",
  },
  {
    name: "太平年",
    path: "songs/太平年.mp3",
    description: "\n\n---可以视作可能不会有下一篇的朝代系列曲\n---南北宋之胡言乱语\n---没错标题以及海报标题又是我从太平御览名字里乱找的\n---明天要找老板meeting好烦\n正经文案：\n后之视今，亦犹今之视昔。于南宋灭亡之际观南唐之灭亡。\n和问春风不一样的是，这首很早就写完了。。。甚至可能比加社团还早因为它是参加一个朝代系列的产物，然后四年了！这个系列终于倒闭了！！于是乎我把它从故纸堆里翻出来找了一首风格符合可以填翻的歌重新填（并重新搜索了每句话的来源）出品！撒花！",
    staff: "策划:伏离玖\n填词/美工:Raycosine\n演唱:小奇葩\n后期:樱庭落\n出品：己酉社\n\n原曲：《斩风阙》\n原曲staff：\n演唱：小曲儿、红烧鲍鱼\n作词/lrc：商连\n作曲/编曲/和声编辑：徒有琴（微月）\n后期：月牙儿（奶妈）\n\n",
    lyrics: "纸上谁论龙韬策\n\n雪夜定山河①\n长驱\n百万貔貅入关洛\n\n金骑霜蹄长楸侧\n数十载分与合\n功与过\n前尘长作后人歌\n\n凤阙龙台歌遍彻②\n只是忘干戈\n一曲\n升平声里卸轻裘\n\n好景良辰等闲过\n一枕千里南柯\n问莫问\n故宫今朝当如何\n\n看 天下一舟\n浮沉悠悠载波流\n看日月驱驰过\n狂澜忽起\n欲裂旧山河\n\n---\n\n白山黑水依旧\n再回首\n风物扫地休\n当时江南谁忆\n长淮秋\n沉醉清平梦\n\n跃马病雁弯弓\n一夕秋\n神州北望已非旧山河\n沈腰潘鬓\n谁人又消磨③\n\n庙堂折冲无策④\n仓皇过\n江湖空自愁\n摧取百年肝胆\n怅平生\n叱咤付沧流\n\n倩谁长缨系取天骄种⑤\n幽水边岸倾酒洗吴钩\n三千里路\n何时能从头⑥\n\n注：①宋太祖雪夜访赵普，计下太原；②③李煜《木兰花·晓妆初了明肌雪》《破阵子·四十年来家国》；④李纲《喜迁莺·真宗幸澶渊》；⑤贺铸《六州歌头·少年侠气》；⑥岳飞《满江红·怒发冲冠》。",
  },
  {
    name: "问春风",
    path: "songs/问春风.mp3",
    description: "\n\n\n白马啸西风.李文秀\n 三次元的繁忙（和鸽王的天赋）让我拖了literally的两年\n",
    staff: "原曲：《流光逝梦》\n作曲：雨霖仙\n编曲：雪2花\n原唱：枫影儿\n策划：翛念殇\n填词&美工：Raycosine\n演唱：秋落蕾\n后期：小奇葩\n出品：己酉社",
    lyrics: "问世间诸事从来多牵缠\n昔年尘灰一朝又重燃\n有心翻出段旧公案\n算几人能从容抽身退波澜\n\n问莫问等闲怎作梦中观\n纷纷云烟一时何足看\n眼前难分死门生路\n风流聚散总是人心最痴贪\n\n问痴贪何事最痴贪\n纵一梦十年仍未倦\n刀镮雪春风吹又染\n意难消恩怨依旧难断\n\n她的身影没入瀚海阑干\n一程星月漫漫\n且渐行渐远告别昨日的尘寰\n回首刀光又照眼\n\n多年前谁埋下草蛇灰线\n一朝浮出水面\n渡尽劫波计多少新仇与旧怨\n都付作剑头微吷\n\n===\n\n问黑白天下谁人能分判\n半枰风霜未可局中看\n或有人叩首问真言\n这诸般红尘事终究难解\n\n问莫问 人情如何似波澜\n天若有情天意也难管\n人心易变时序易迁\n当年明月也换了旧时容颜\n\n问离别天涯各一端\n纵相见怎识故人面\n谁清歌一曲犹未阕\n忽忆年少事不解夜阑\n\n她打马过当年的那座山\n一隔喧嚣纷乱\n多年后谁还记得冰封的誓言\n谁还在旧时盘桓\n\n她打马过身后无数山川\n一路风烟散漫\n听人说平生不过塞北和江南\n却负春风多少年\n\n又看梁间飞去双双燕\n归来都翻作离群雁\n算几回人世匆匆能往还\n浮生各自悲欢\n\n无冬无夏早无缘\n非驴非马且笑谈\n惆怅如今此身去已枉然\n天山雪春风吹又寒",
  },
  {
    name: "自把云山烂漫酬",
    path: "songs/自把云山烂漫酬.mp3",
    description: "\n\n\n写给7月的一些人和事\n\n 过去的，现在的，未来的，7月",
    staff: "原曲：《your eyes》\n\n策划:伏离玖\n\n填词:raycosine【己酉】\n\n翻唱:戎六\n\n后期:云辞【星次元】\n\n美工:伊撒尔",
    lyrics: "行行何所留 去去一舟\n\n泛泛江湖各分游\n\n昔时谓我同流 二三故俦\n\n平生拍肩挹袖足相投\n\n絮絮言半宿\n\n拍拍浮浮不过几钟酒\n\n催来未就\n\n若得明朝作书邮\n\n还将一一数从头\n\n无意亦无愁\n\n也曾拔剑中宵舞未休\n\n待当别后\n\n转眼千里隔依旧\n\n自把云山烂漫酬\n\n而今正晴昼\n\n莫教淋漓点墨满襟袖\n\n归时秋风来又\n\n故人把手再看中流",
  },
  {
    name: "言归",
    path: "songs/言归.mp3",
    description: "\n\n\n往来行言，心焉数之。\n\n蛇蛇硕言，出自口矣。\n\n巧言如簧，颜之厚矣。",
    staff: "原曲：《莺梭の庭に踵も踊る》\n\n策划：伏离玖\n\n填词：Raycosine\n\n演唱：可那\n\n混缩：云辞【星次元】\n\n美工：墨倾雅\n\n—己酉出品—\n",
    lyrics: "言归 言归\n\n哪个能得归\n\n曾忘 首阳山歌采薇\n\n举杯 举杯\n\n满座尽樽罍\n\n终日亡何图一醉\n\n莫催 莫催\n\n日月不曾催\n\n人间 看锦绣又成堆\n\n倾杯 倾杯\n\n往来俱喧豗\n\n不如 照旧听歌吹\n\n与我参世态\n\n是纷纷较是非\n\n是碌碌计等衰\n\n我耳不容喙\n\n辨得分明，何为错何为对\n\n为我谆谆诲\n\n道最难识进退\n\n道孤直犹我韪\n\n千秋同一毁\n\n将他只作 狺狺一吠\n\n——M——\n\n寻归 寻归\n\n明朝醒也未\n\n寻常 难解个中三味\n\n何叹 何畏\n\n过处皆鼎沸\n\n啸呼自有千百辈\n\n觉非 觉非\n\n摇舌不可追\n\n我心 行处皆是翠微\n\n莫催 莫催\n\n岁月不须催\n\n人间一堕未肯归\n\n听我言兴废\n\n不以俗物喜悲\n\n不与他论盈亏\n\n是非或错对\n\n过眼一场 三千劫数成灰\n\n观我红尘内\n\n或林间弄清徽\n\n或街巷听嘈啐\n\n悠悠何所归\n\n举白飞觞 天地一醉\n\n——E——",
  },
  {
    name: "笙箫梦",
    path: "songs/笙箫梦.mp3",
    description: "\n\n\n凤台曲（唐·李白）\n\n尝闻秦帝女，传得凤凰声。是日逢仙子，当时别有情。\n\n人吹綵箫去，天借绿云迎。曲在身不返，空馀弄玉名。",
    staff: "原曲：《一番绮丽な私を》\n\n填词：Raycosine\n\n策划：伏离玖\n\n演唱：可那\n\n混缩：安素公子\n\n美工：东南枝\n\n—己酉出品—\n",
    lyrics: "夜沉沉 惆怅立寒空\n\n玲珑一曲 谁将清越入云中\n\n何处瑶笙识我意 宛转断续诉东风\n\n山水间 长思量月明中\n\n\n携丹凤 飞落九重宫\n\n灵犀一点 两心之外无人通\n\n无关人间风月事 千载知音难相逢\n\n殷勤问 可与我清宵共\n\n\n高台上 相和一曲凤凰来拥\n\n携手相对坐 看烛影摇红\n\n人世间 金风玉露一旦相逢\n\n胜却了无数 待明朝 共赴紫烟中\n\n\n都道是 高处可乘风\n\n别是一般风流 怎教俗人懂\n\n或归林间寻旧友 或向乾坤探鸿蒙\n\n天地间 自与凡尘不同\n\n\n谢红尘 执手共从容\n\n山中日月 世外春秋自无穷\n\n天外云上可偕游 不与人间争倥偬\n\n尘寰处 何必留昔年踪\n\n\n阖眼间 三千寒暑俯仰成空\n\n闲来追往事 微茫如旧梦\n\n人世中 金风玉露千般相逢\n\n看罢了无数 都不似 你我相与共\n\n\n啊…换过了几回身外身\n\n千载还如 梦中梦\n\n醉中觉 看却俗世忘却浮生\n\n归天上洗罢一段红尘\n\n\n沧海过 依旧是世间自在身\n\n携手相对坐 仰首看飞轮\n\n都道是 须弥日月芥子乾坤\n\n悠悠朝夕过 非幻又非真\n\n\n梦一回 千岁过尽还作归人\n\n凤凰台上坐 吹彻九重春\n\n调玉笙 起清商 记一曲金石盟\n\n共将当时事 再入华山梦 一程\n\n许今生 岁岁年年莫负良辰 啊…",
  },
  {
    name: "方寸心",
    path: "songs/方寸心.mp3",
    description: "\n\n\n当时初入君怀袖，岂念寒炉有死灰。\n怀念我的（被xxx拿走的）太极扇",
    staff: "原曲：《无关风月》\n\n演唱：音频怪物&HITA\n\n作词：丁心\n\n作曲：音频怪物\n\n编曲：吴依瑄\n\n混缩：Allen\n\n填词：Raycosine\n\n策划：翛念殇\n\n翻唱：奈何黄泉\n\n后期：樱庭落\n\n美工：挽情\n\n—己酉出品—\n",
    lyrics: "还将剡[1]城雪剪作一段霜\n\n何处偷却明月流光\n\n斫得白玉骨束来十二潇湘\n\n度得昔年谁人裁将\n\n\n平生无寒暑怀袖自生凉\n\n携得清风翩翩载扬\n\n归去红尘老闲来白昼长\n\n方寸之上写段文章\n\n\n看倦江山景\n\n书我平生意\n\n俯仰为陈迹\n\n别来几朝夕\n\n\n还将当时忆叠作纸上一寸心\n\n翻手水墨山川长收入眼底\n\n漫将红尘事著眼纷纷朱成碧\n\n提笔欲落却无字可题\n\n\n旧雨江湖远十分曾不存六七\n\n而今飘零沦落各自东西\n\n合散风尘中十年一梦尚如新\n\n劝一杯莫问今夕是何夕\n\n\n应有江山景\n\n识我平生意\n\n俯仰百年去\n\n匆匆过朝夕\n\n\n还将当时忆藏作纸上方寸心\n\n回首水墨山川一如当时景\n\n漫将红尘事著眼纷纷朱成碧\n\n铺却尺素倩谁为我题\n\n\n旧雨江湖远十分曾不存六七\n\n而今飘零沦落各自东西\n\n合散风尘中十年一梦到如今\n\n劝一杯今夕不再似昨夕\n\n\n醒时须长记百年莫与我期\n\n看浮生一场不过逆旅\n\n临见古人诗都道浩叹不如吟\n\n匆匆翻过一生聚和离\n\n\n藏却旧时物好教相忘莫相忆\n\n携一书一剑与君长揖\n\n莫追半生事人间荣谢自迢递\n\n二十四番风过是秋期\n\n\n平生无寒暑怀袖自知凉\n\n携来清风依旧载扬\n\n归去红尘老闲来白昼长\n\n悠悠散尽往事年光",
  },
  {
    name: "不是人间客",
    path: "songs/不是人间客.mp3",
    description: "\n\n\n飞狐外传·程灵素\n 我好爱程灵素",
    staff: "原曲：《风月事》【千里丹心万里路】\n\n作曲：少司命\n\n编曲：灰原穷\n\n策划：AD钙爹\n\n填词：Raycosine\n\n翻唱：2.20\n\n和声：AD钙爹\n\n混缩：AD钙爹\n\n美工：姜濯—\n\n—己酉出品—\n",
    lyrics: "一饷梦 半阙歌 归去时无人共我\n\n算人间 贪颜色 此中真意几个识得\n\n藏起寻常一段事 惆怅且与何人说\n\n海棠无声 心上开心上落\n\n\n有情多 同转侧 到头都是凡人一个\n\n纵斟酌 终成错 早来未卜前后因果\n\n知他灵犀寄何处 问我素心当如何\n\n平地风波 不如就此取舍\n\n\n阖眼故人故事依旧在 过了一纪还多\n\n明朝明月回转千秋还作一色\n\n都道人间自是有情痴 半生仍未消磨\n\n不过是 刀间梦 旧时歌\n\n\n十年梦 付长歌 醒来能得几人同我\n\n知音少 俗人多 清风一度也可相和\n\n参罢菩提无一物 明镜难著红尘色\n\n教他如此 向来何事系纠葛\n\n\n阖眼故人故事依旧在 过了一纪还多\n\n明朝明月回转千秋还作一色\n\n都道人间自是有情痴 半生也应消磨\n\n不过是 刀间梦 旧时歌\n\n\n莫问字里悲欢可奈何 囿于纸上评说\n\n借来三分才力可写江湖寥廓\n\n且换一般天地浩茫处 不负生平落拓\n\n待他日 纵马去 放长歌\n\n\n料得此身不是人间客 一任尘劫空过\n\n由他去 将前事 数南柯",
  },
  {
    name: "见尘烟",
    path: "songs/见尘烟.mp3",
    description: "\n\n\n\n《南烟斋笔录》陆曼笙同人",
    staff: "原著：壳小杀&左小翎\n原曲：栗林みな実《微笑みの彼方》\n策划：AD钙爹\n填词：Raycosine\n演唱：莱莱莱\n混缩：夜二少\n美工：今朝\n—己酉出品—\n",
    lyrics: "这世间寻常无起伏\n素手有时调香入\n红尘事 聚散如烟雾\n冷眼看得隔岸世人渡\n\n或有痴人生死两误\n或有贪心总不足\n人间事 扑朔尽迷雾\n眼前对错莫分付\n\n填却这世间百种千般苦\n问自身如何度\n人间阴晴难测\n安得两全处\n只手堪笑若蚍蜉\n见天意 从来 高难误\n\n观门外繁华竞相逐\n数十载后归黄土\n纵算得 前世今生路\n年去岁来故人渐次疏\n\n提孤灯夜照来时路\n四顾苍茫何去处\n渐别来 此心与谁晤\n饮罢桃花自知苦\n\n百转千回寻得此行归处\n初相逢已末路\n人间一世苦短\n能得几回误\n回首芳华 自扶疏\n花树下 轮回 一如故\n\n—己酉出品—",
  },
  {
    name: "醉乡日月",
    path: "songs/醉乡日月.mp3",
    description: "\n\n\n致敬同名书籍(唐朝的皇甫松的那本)，虽然已经和原书没有什么关系了....写的可能更像魏晋闲人...(啊 但我其实并不知道喝酒的感觉(啊 没有关系的\n 喝酒！",
    staff: "原曲：《神居谣》\n\n策划：寒榛\n\n填词：Raycosine\n\n演唱：大白的菠萝包\n\n混缩：AD钙爹\n\n美工：花佐\n\n出品：己酉社",
    lyrics: "金波倾寒罍入夜独斟\n\n挥手招明月共饮一壶春\n\n醉里年岁不分 沧海转瞬\n\n大梦一朝醒听依旧风雨声\n\n\n有酒徒 长劝我 放开万事自浮沉\n\n一世无常爱恨贪痴不过 觥筹数声\n\n看繁华照眼 到头才知是石火风灯\n\n尘埃落尽 荡然无存\n\n\n\n\n百岁光阴未满 长揖红尘\n\n惺忪一双眼 看尽世间假真\n\n谈笑自寻清风 不问浮生\n\n备一壶浊酒浇却块垒风尘\n\n\n\n\n风波定 渐黄昏 不如早去计归程\n\n樽前一杯寥落流光 洗尽 过客愁尘\n\n看烟波来去 一舟一芥子行去无痕\n\n且行且吟 独唱平生\n\n\n言亦不可尽 情亦不可极\n\n雨散星离 看岁月风流去\n\n若问归去 东山白首隔千里\n\n问青云不可期 不如对酒自倾\n\n\n有狂徒 歌一曲 万事任尔东流去\n\n半醉起舞不如引春风 此时无限情\n\n将身后流离 换却眼前片刻良辰景\n\n横眠莫顾 明日风雨\n\n\n有狂徒 呼我去 壶中悠悠自朝夕\n\n壶外何妨换天地 惟愿 长醉不复醒\n\n笑莫笑纷纭 谁能等闲忘却形名\n\n一酌一饮 遥祝刘伶",
  },
  {
    name: "道说",
    path: "songs/道说.mp3",
    description: "\n\n\n\n早期作品",
    staff: "原曲：《山海侧》\n\n演唱：银临\n\n作曲：银临/灰原穷\n\n作词：若紫鸢\n\n编曲：Mzf小慕\n\n演唱：HITA&银临\n\n和声：银临\n\n填词：我\n\n翻唱：小咸\n\n后期：雪人\n\n美工：我\n\n",
    lyrics: "听一番历历道说尽\n\n恍如昨日梦 故人如初\n\n阖眼之间盛衰枯荣\n\n不过古今中 海阔天空\n\n\n忽和破碎的时间触碰\n\n颠覆坍塌后 方换得一幡然了悟\n\n\n阅无数悲欢 依旧懵懂\n\n历人间百种 堪道始终\n\n\n向来因果 一时羁留\n\n不知风云古今天下皆同\n\n谈笑之中 转眼倥偬\n\n旦夕间千年 既已随朝露成空\n\n\n俯仰一世间复何如\n\n或断水错刀 踏雪飞鸿\n\n逃不出名利锁尘笼\n\n云海翻覆中 且作从容\n\n\n观岩外日月山上青松\n\n无言红尘外 听遍了东西南北风\n\n\n是何方断续琴歌相送\n\n悲泠泠三四声入云中\n\n\n向来因果 一时羁留\n\n不知风云古今 天下皆同\n\n谈笑之中 转眼倥偬\n\n旦夕间千年 既已随朝露成空",
  },
  {
    name: "江山与归",
    path: "songs/江山与归.mp3",
    description: "2022年3月补充：\n原曲编曲刘笑寒3月16日晚在苏州某园区电梯尾随猥亵女性刑拘9天，新闻可搜索，he tui！但翻唱包含了翻唱staff的劳动付出，特此补充声明本人对该猥亵犯的恶心，刑拘9天也太少了，科科。\n\n=====\n\n当时是参加一个..xxxx的翻唱大赛...还混了一个小奖（大误）。\n\n文案：旧雨零落去，新酒且独酌。青山碧水间，拂去七弦桐上尘，三两声落，往昔历历犹在目，过从之人，今多不识，沉浮之事，何堪自扰。吾谁与归？幸有无限江山。\n\n早期作品",
    staff: "原曲：《雪舞》\n\n演唱：银临\n\n作词：曾怡 王星环\n\n作曲：银临\n\n编曲：刁子恒 刘笑寒\n\n混编：吴家禾_萌马音乐\n\n填词：我\n\n翻唱：小咸\n\n后期：雪人\n\n美工：我",
    lyrics: "一曲幽兰 重拾旧欢\n\n清霜残 一生寄七弦弹\n\n青山暗淡 指下迟缓\n\n三声叹断 已是风流云散\n\n长安梦短 重到旧游处\n\n飞度无数山 寒烟碧水迢递路阻绝波澜\n\n从前衣冠 落满浮尘埃\n\n换一夕怃然 孤怀难遣四天外星斗阑干\n\n\n欲邀明月 独醉尊前\n\n行路难 无奈归路亦难\n\n一行归雁 明朝重来\n\n光阴荏苒 残心可似旧年\n\n昔日弹冠 碌碌自贪欢\n\n肯作故人看 红尘踏尽谁与伴只有江山\n\n却上楼台 高处不胜寒\n\n独自莫凭栏 世事沉浮人自扰天地自宽\n\n",
  },
];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  //track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_des.innerText = track_list[track_index].description;
  track_staff.innerText = track_list[track_index].staff;
  track_lyrics.innerText = track_list[track_index].lyrics;
  track_name.innerText = track_list[track_index].name;
  //track_artist.innerText = track_list[track_index].artist;
  now_playing.innerText = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  //random_bg_color();
}
function loadListInfo(){
  track_list_info.innerHTML = "";
  for(var i=0;i<track_list.length; i++){
    track_list_info.innerHTML += "<div class='list-info-item list-info-"+(i+1).toString()+"' onclick='loadTrack("+(i).toString()+")' style='margin-top: 2px;'>" + (i+1).toString() + ". "+ track_list[i].name + "</div>";
  }
}
function resetValues() {
  curr_time.innerText = "00:00";
  total_duration.innerText = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);
loadListInfo();
function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;
    if(isPlaying == true){
      track_lyrics.scrollTo(0,track_lyrics.scrollHeight*(seekPosition/100));
    }
    
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.innerText = currentMinutes + ":" + currentSeconds;
    total_duration.innerText = durationMinutes + ":" + durationSeconds;
  }
}



function visit_des(){
  track_des.style.height="65%";
  track_staff.style.height="0%";
  track_lyrics.style.height="0%";
}
function visit_staff(){
  track_des.style.height="0%";
  track_staff.style.height="65%";
  track_lyrics.style.height="0%";
}
function visit_lyrics(){
  track_des.style.height="0%";
  track_staff.style.height="0%";
  track_lyrics.style.height="65%";
}