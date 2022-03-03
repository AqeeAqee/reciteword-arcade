// Add your code here
enum WordlistName
{
    PrimaryAll,
    RA6_08,
}

namespace wordlists{

//% blcok=get words $listname
export function getWords(listname:WordlistName){
    switch(listname){
        case WordlistName.PrimaryAll:
            return words_Primary
        case WordlistName.RA6_08:
            return words_RA6_08
        default:
            return []
    }
}

export let words_RA6_08:string[][]=[
    ["possible", "形 可能，可能发生的"],
    ["can't help but do...", "不能停止做某事，忍不住做某事"],
    ["nervous", "形 紧张不安的"],
    ["nod", "动 点头同意，点头许可"],
    ["discuss", "动 讨论，谈论"],
    ["consider", "动 认为，视为"],
    ["further", "形 更多的，进一步的"],
    ["notice", "名 通知，通告"],
    ["further notice", "进一步的通知"],
    ["until further notice", "直至另行通知"],
    ["muffle", "动 减低，降低(声音)"],
    ["conversation", "名 (非正式的)交谈，谈话"],
    ["toss", "动 抛，扔"],
    ["over", "副 又，再一次"],
    ["hold out", "伸出，递出"],
    ["meatloaf", "名 肉饼"],
    ["mash", "动 捣烂，把(食物等)捣成糊状"],
    ["mashed potatoes", "豆泥"],
    ["broccoli", "名 西兰花"],
    ["roll one's eyes", "（某人)翻白眼"],
    ["figure", "动 预料，认为"],
    ["find out", "发现，弄清"],
    ["anyway", "副 不管怎样"],
    ["freak", "动 使心烦意乱"],
    ["freak out", "心里乱极了，吓坏了"],
    ["reply", "动 回答，答复"],
    ["sheepish", "形 (尤指做了傻事或错事后)羞怯的，窘迫的"],
    ["sniff", "动 嗅，闻"],
    ["ask", "动 请求，征求"],
    ["repay", "动 报答"],
    ["exactly", "副 确切地，准确地"],
    ["on", "介 是…一员，在列表中"],
    ["actually", "副 实际上，事实上"],
    ["relieved", "形 放心的，宽慰的"],
    ["repeat", "动 重复一遍"],
    ["shot", "名 投篮"],
    ["perfect", "形 完美的，极其准确的"],
    ["be perfect at", "极其擅长于"],
    ["purpose", "名 目的，意图"],
    ["on purpose", "故意地"],
    ["all that...", "如此，那么"],
    ["forth", "副 向前"],
    ["back and forth", "前前后后地"],
    ["sense", "名 意义，理由"],
    ["make sense", "有意义，是明智的"],
    ["shrug", "动 耸肩"],
    ["stupid", "形 不明智的，愚蠢的"],
    ["trick", "动 蒙骗"],
    ["trick sb. into doing...", "诱使某人做某事"],
    ]



    export let words_Primary = [
        ["about", "ə-ˈbau̇t", "[əˈbaʊt]", "介 关于;副 大约"],
        ["above", "ə-ˈbəv", "[əˈbʌv]", "介 在/向…上面"],
        ["across", "ə-ˈkrȯs", "[əˈkrɒs]", "介 横过，穿过，在…对面;副 横过，从一边到另一边"],
        ["act", "ˈakt", "[ækt]", "动 表演"],
        ["active", "ˈak-tiv", "[ˈæktɪv]", "形 积极的，活跃的"],
        ["actor", "ˈak-tər", "[ˈæktəʳ]", "名 男演员"],
        ["ad", "ˈad", "[æd]", "名 广告"],
        ["address", "ə-ˈdres", "[əˈdres]", "名 地址"],
        ["afraid", "ə-ˈfrād", "[əˈfreɪd]", "形 害怕的，担心的"],
        ["after", "ˈaf-tər", "[ˈɑːftəʳ]", "介 在…之后"],
        ["afternoon", "ˌaf-tər-ˈnün", "[ˌɑːftəˈnuːn]", "名 下午"],
        ["again", "ə-ˈgen", "[əˈgen]", "副 又一次，再一次"],
        ["age", "ˈāj", "[eɪdʒ]", "名 年龄"],
        ["ago", "ə-ˈgō", "[əˈɡəʊ]", "副 以前"],
        ["air", "ˈer", "[eəʳ]", "名 空气;空中(the air)"],
        ["airport", "ˈer-ˌpȯrt", "[ˈeəpɔːt]", "名 飞机场"],
        ["alarm", "ə-ˈlärm", "[əˈlɑːm]", "名 闹钟"],
        ["all", "ˈȯl", "[ɔːl]", "形 全部的，所有的，一切的;代 全体，全部"],
        ["almost", "ˈȯl-ˌmōst", "[ˈɔːlməʊst]", "副 几乎，差不多"],
        ["along", "ə-ˈlȯŋ", "[əˈlɒŋ]", "介 沿着;副 向前，与……一起"],
        ["also", "ˈȯl-ˌsō", "[ˈɔːlsəʊ]", "副 还，也"],
        ["always", "ˈȯl-wēz", "[ˈɔːlweɪz]", "副 总是"],
        ["a.m.", "ˈā-ˌem", "[ˌeɪˈem]", "上午"],
        ["American", "ə-ˈme-rə-kən", "[əˈmerɪkən]", "形 美洲的，美国的;名 美国人，美洲人，美式英语"],
        ["and", "ˈand", "[ænd]", "连 和，与"],
        ["angry", "ˈaŋ-grē", "[ˈæŋɡrɪ]", "形 愤怒的，生气的"],
        ["animal", "ˈa-nə-məl", "[ˈænɪml]", "名 动物"],
        ["answer", "ˈan-sər", "[ˈɑːnsəʳ]", "名 答案;动 回答，应答"],
        ["ant", "ˈant", "[ænt]", "名 蚂蚁"],
        ["any", "ˈe-nē", "[ˈeni]", "代 一些，任何的"],
        ["anybody", "ˈe-nē-ˌbə-dē", "[ˈenibɒdi]", "代 任何人，有人"],
        ["anyone", "ˈe-nē-ˌwən", "[ˈeniwʌn]", "代 任何人，随便哪个人"],
        ["anything", "ˈe-nē-ˌthiŋ", "[ˈeniθɪŋ]", "代 任何事物"],
        ["anywhere", "ˈe-nē-ˌwer", "[ˈeniweəʳ]", "副 在任何地方;代 无论何处，任何地方"],
        ["apple", "ˈa-pəl", "[ˈæpl]", "名 苹果"],
        ["April", "ˈā-prəl", "[ˈeɪprəl]", "名 四月"],
        ["arm", "ˈärm", "[ɑːm]", "名 胳膊"],
        ["army", "ˈär-mē", "[ˈɑːmɪ]", "名 军队，陆军"],
        ["arrive", "ə-ˈrīv", "[əˈraɪv]", "动 到达，达到"],
        ["art", "ˈärt", "[ɑːt]", "名 艺术，美术，艺术作品;文科"],
        ["ask", "ˈask", "[ɑːsk]", "动 询问，邀请"],
        ["at", "ˈat", "[æt]", "介 在……;在……时刻;(表目标和方向)向，对"],
        ["attention", "ə-ˈten-shən", "[əˈtenʃn]", "名 注意"],
        ["August", "ˈȯ-gəst", "[ˈɔːɡəst]", "名 八月"],
        ["aunt", "ˈänt", "[ɑːnt]", "名 婶娘，姑妈，伯母，舅母，姨妈"],
        ["Australia", "ȯ-ˈstrā-lyə", "[ɒˈstreɪlɪə]", "名 澳大利亚"],
        ["autumn", "ˈȯ-təm", "[ˈɔːtəm]", "名 秋天"],
        ["baby", "ˈbā-bē", "[ˈbeɪbɪ]", "名 婴儿"],
        ["back", "ˈbak", "[bæk]", "名 后背，背部;形 后面的;副 向后，回原处"],
        ["bad", "ˈbad", "[bæd]", "形 坏的，有害的，严重的，使人不高兴的"],
        ["bag", "ˈbag", "[bæg]", "名 书包，手提袋，袋子"],
        ["ball", "ˈbȯl", "[bɔːl]", "名 球"],
        ["bamboo", "ˌbam-ˈbü", "[ˌbæmˈbuː]", "名 竹子"],
        ["banana", "bə-ˈna-nə", "[bəˈnɑːnə]", "名 香蕉"],
        ["bank", "ˈbaŋk", "[bæŋk]", "名 岸，堤;银行"],
        ["basket", "ˈba-skit", "[ˈbɑːskɪt]", "名 篮子，筐"],
        ["basketball", "ˈba-skit-ˌbȯl", "[ˈbɑːskɪtˌbɔːl]", "名 篮球，篮球运动"],
        ["bathroom", "ˈbath-ˌrüm", "[ˈbɑːθˌruːm]", "名 浴室"],
        ["beach", "ˈbēch", "[biːtʃ]", "名 海滩"],
        ["bear", "ˈber", "[beəʳ]", "名 熊"],
        ["beautiful", "ˈbyü-ti-fəl", "[ˈbjuːtɪfl]", "形 (人)美丽的，漂亮的;(天气)美好的"],
        ["because", "bi-ˈkȯz", "[bɪˈkɒz]", "连 因为"],
        ["become", "bi-ˈkəm", "[bɪˈkʌm]", "动 开始变得，变成"],
        ["bed", "ˈbed", "[bed]", "名 床"],
        ["bee", "ˈbē", "[biː]", "名 蜜蜂"],
        ["beef", "ˈbēf", "[biːf]", "名 牛肉"],
        ["before", "bi-ˈfȯr", "[bɪˈfɔːʳ]", "介 在……前面;副 以前"],
        ["begin", "bi-ˈgin", "[bɪˈɡɪn]", "动 开始，着手"],
        ["behind", "bi-ˈhīnd", "[bɪˈhaɪnd]", "介 在……后面"],
        ["believe", "bə-ˈlēv", "[bɪˈliːv]", "动 相信，认为"],
        ["bell", "ˈbel", "[bel]", "名 钟，铃"],
        ["belt", "ˈbelt", "[belt]", "名 皮带，腰带"],
        ["beside", "bi-ˈsīd", "[bɪˈsaɪd]", "介 在……旁边"],
        ["best", "ˈbest", "[best]", "形 最好的;副 最，最好地"],
        ["better", "ˈbe-tər", "[ˈbetəʳ]", "形 比较好的，更好的;副 更好地"],
        ["between", "bi-ˈtwēn", "[bɪˈtwiːn]", "介 在……之间"],
        ["bicycle", "ˈbī-si-kəl", "[ˈbaɪsɪkl]", "名 自行车"],
        ["big", "ˈbig", "[bɪg]", "形 大的"],
        ["bike", "ˈbīk", "[baɪk]", "名 自行车"],
        ["bird", "ˈbərd", "[bɜːd]", "名 鸟"],
        ["birth", "ˈbərth", "[bɜːʳθ]", "动 出生"],
        ["birthday", "ˈbərth-ˌdā", "[ˈbɜːʳθdeɪ]", "名 生日"],
        ["bit", "ˈbit", "[bɪt]", "名 有点儿，小块"],
        ["black", "ˈblak", "[blæk]", "形 黑色的;名 黑色"],
        ["blackboard", "ˈblak-ˌbȯrd", "[ˈblækbɔːʳd]", "名 黑板"],
        ["blind", "ˈblīnd", "[blaɪnd]", "形 失明的"],
        ["blow", "ˈblō", "[bloʊ]", "动 吹，刮"],
        ["blue", "ˈblü", "[bluː]", "形 蓝色的;名 蓝色"],
        ["boat", "ˈbōt", "[boʊt]", "名 小船"],
        ["body", "ˈbä-dē", "[ˈbɒdɪ]", "名 身体"],
        ["boil", "ˈbȯil", "[bɔɪl]", "动 煮沸，烧开;名 沸点"],
        ["bone", "ˈbōn", "[boʊn]", "名 骨头"],
        ["book", "ˈbu̇k", "[bʊk]", "名 书;动 预定"],
        ["boot", "ˈbüt", "[buːt]", "名 靴子"],
        ["born", "ˈbȯrn", "[bɔːʳn]", "形 天生的，生来的;动 出生"],
        ["borrow", "ˈbä-ˌrō", "[ˈbɒrəʊ]", "动 (向别人)借"],
        ["boss", "ˈbȯs", "[bɒs]", "名 老板，上司"],
        ["both", "ˈbōth", "[boʊθ]", "代 两个，两个都"],
        ["bottle", "ˈbä-tᵊl", "[ˈbɒtl]", "名 瓶子"],
        ["bowl", "ˈbōl", "[bəʊl]", "名 碗"],
        ["box", "ˈbäks", "[bɒks]", "名 盒子，箱子;动 (拳击运动)击打(某人)"],
        ["boy", "ˈbȯi", "[bɔɪ]", "名 男孩"],
        ["brave", "ˈbrāv", "[breɪv]", "形 勇敢的"],
        ["bread", "ˈbred", "[bred]", "名 面包"],
        ["breakfast", "ˈbrek-fəst", "[ˈbrekfəst]", "名 早餐"],
        ["bridge", "ˈbrij", "[brɪdʒ]", "名 桥"],
        ["bright", "ˈbrīt", "[braɪt]", "形 明亮的，灿烂的，聪明的，伶俐的"],
        ["bring", "ˈbriŋ", "[brɪŋ]", "动 带来，拿来"],
        ["Britain", "ˈbri-tᵊn", "[ˈbrɪtn]", "名 不列颠(包括英格兰、苏格兰和威尔士)"],
        ["British", "ˈbri-tish", "[ˈbrɪtɪʃ]", "形 英国的，英国人的"],
        ["brother", "ˈbrə-t͟hər", "[ˈbrʌðə]", "名 兄，弟"],
        ["brown", "ˈbrau̇n", "[braʊn]", "形 棕色的，褐色的;名 棕色，褐色"],
        ["brush", "ˈbrəsh", "[brʌʃ]", "名 刷子，毛刷，画笔;动 (用刷子)刷"],
        ["build", "ˈbild", "[bɪld]", "动 建造，建筑"],
        ["building", "ˈbil-diŋ", "[ˈbɪldɪŋ]", "名 建筑物；楼房"],
        ["bus", "ˈbəs", "[bʌs]", "名 公共汽车"],
        ["busy", "ˈbi-zē", "[ˈbɪzɪ]", "形 忙碌的，忙的"],
        ["but", "ˈbət", "[bət]", "连 但是;介 除…以外"],
        ["buy", "ˈbī", "[baɪ]", "动 购买"],
        ["by", "ˈbī", "[baɪ]", "介 再…旁边，靠近;在……之前;乘(某种交通工具);由于"],
        ["café", "ka-ˈfā", "[ˈkæfeɪ]", "名 咖啡馆"],
        ["cage", "ˈkāj", "[keɪdʒ]", "名 笼子;动 把(动物）关在笼中"],
        ["cake", "ˈkāk", "[keɪk]", "名 蛋糕"],
        ["call", "ˈkȯl", "[kɔːl]", "动 叫，呼叫，称呼;名 通话"],
        ["camera", "ˈkam-rə", "[ˈkæmrə]", "名 照相机"],
        ["camp", "ˈkamp", "[kæmp]", "名 野营"],
        ["can", "ˈkan", "[kæn]", "名 罐头，金属罐;情态 能够，会"],
        ["Canada", "ˈka-nə-də", "[ˈkænədə]", "名 加拿大"],
        ["candle", "ˈkan-dᵊl", "[ˈkændl]", "名 蜡烛"],
        ["candy", "ˈkan-dē", "[ˈkændɪ]", "名 糖果"],
        ["cap", "ˈkap", "[kæp]", "名 帽子"],
        ["capital", "ˈka-pə-tᵊl", "[ˈkæpɪtl]", "名 首都，省会"],
        ["car", "ˈkär", "[kɑːʳ]", "动 小汽车"],
        ["card", "ˈkärd", "[kɑːd]", "名 贺卡，请帖，卡片"],
        ["care", "ˈker", "[keəʳ]", "名 照顾，照料;动 担忧；在意"],
        ["careful", "ˈker-fəl", "[ˈkeəfl]", "形 小心的，仔细地，谨慎的"],
        ["carrot", "ˈke-rət", "[ˈkærət]", "名 胡萝卜"],
        ["carry", "ˈke-rē", "[ˈkærɪ]", "动 搬运，运送，手提"],
        ["cartoon", "kär-ˈtün", "[kɑːˈtuːn]", "名 漫画，动画片，卡通片"],
        ["cat", "ˈkat", "[kæt]", "名 猫"],
        ["catch", "ˈkach", "[kætʃ]", "动 抓住，捉补，赶上，患上(疾病)"],
        ["CD", "ˌsē-ˈdē", "[ˌsiːˈdiː]", "名 光盘，激光唱片"],
        ["cent", "ˈsent", "[sent]", "名 分"],
        ["centre", "ˈsen-tər", "[ˈsentəʳ]", "名 中心，中央"],
        ["century", "ˈsen-shrē", "[ˈsentʃərɪ]", "名 世纪，百年"],
        ["certainly", "ˈsər-tᵊn-lē", "[ˈsɜːtnlɪ]", "副 当然"],
        ["chair", "ˈcher", "[tʃeəʳ]", "名 椅子;(大学的)系主任"],
        ["chalk", "ˈchȯk", "[tʃɔːk]", "名 粉笔"],
        ["cheap", "ˈchēp", "[tʃiːp]", "形 便宜的，廉价的"],
        ["check", "ˈchek", "[tʃek]", "动 检查，核对"],
        ["cheese", "ˈchēz", "[tʃiːz]", "名 乳酪，干酪，奶酪"],
        ["chemistry", "ˈke-mə-strē", "[ˈkemɪstrɪ]", "名 化学"],
        ["chess", "ˈches", "[tʃes]", "名 国际象棋"],
        ["chicken", "ˈchi-kᵊn", "[ˈtʃɪkɪn]", "名 小鸡，鸡肉"],
        ["child", "ˈchīld", "[ˈtʃaɪld]", "名 孩子，儿童"],
        ["China", "ˈchī-nə", "[ˈtʃaɪnə]", "名 中国"],
        ["china", "ˈchī-nə", "[ˈtʃaɪnə]", "名 瓷器"],
        ["Chinese", "chī-ˈnēz", "[ˌtʃaɪˈniːz]", "名 汉语，中国人;形 中国的，中国人的"],
        ["chocolate", "ˈchä-kə-lət", "[ˈtʃɒklət]", "名 巧克力"],
        ["chopstick", "ˈchäp-ˌstik", "[ˈtʃɒpstɪk]", "名 筷子"],
        ["cinema", "ˈsi-nə-mə", "[ˈsɪnəmə]", "名 电影院"],
        ["circle", "ˈsər-kəl", "[ˈsɜːkl]", "名 圆圈;动 画圈"],
        ["city", "ˈsi-tē", "[ˈsɪtɪ]", "名 城市"],
        ["class", "ˈklas", "[klɑːs]", "名 班级，课"],
        ["classroom", "ˈklas-ˌrüm", "[ˈklɑːsruːm]", "名 教室"],
        ["clean", "ˈklēn", "[kliːn]", "形 干净的，清洁的;动 打扫，弄干净"],
        ["clear", "ˈklir", "[klɪəʳ]", "形 清晰的；晴朗的；明白的；显然的"],
        ["clever", "ˈkle-vər", "[ˈklevəʳ]", "形 聪明的，伶俐的"],
        ["climb", "ˈklīm", "[klaɪm]", "动 爬"],
        ["clock", "ˈkläk", "[klɒk]", "名 钟"],
        ["close", "ˈklōz", "[kləʊz]", "动 关闭;形 接近；亲密的"],
        ["cloth", "ˈklȯth", "[klɒθ]", "名 布料"],
        ["clothes", "ˈklōt͟hz", "[kləʊðz]", "名 (泛指)衣服"],
        ["clothing", "ˈklō-t͟hiŋ", "[ˈkləʊðɪŋ]", "名 某种服装"],
        ["cloud", "ˈklau̇d", "[klaʊd]", "名 云"],
        ["cloudy", "ˈklau̇-dē", "[ˈklaʊdi]", "形 多云的，阴天的"],
        ["club", "ˈkləb", "[klʌb]", "名 俱乐部"],
        ["coach", "ˈkōch", "[kəʊtʃ]", "名 教练"],
        ["coal", "ˈkōl", "[kəʊl]", "名 煤"],
        ["coat", "ˈkōt", "[kəʊt]", "名 外套，大衣"],
        ["coffee", "ˈkȯ-fē", "[ˈkɒfɪ]", "名 咖啡，咖啡饮料"],
        ["coin", "ˈkȯin", "[kɔɪn]", "名 硬币"],
        ["Coke", "ˈkōk", "[kəʊk]", "名 可乐"],
        ["cold", "ˈkōld", "[kəʊld]", "形 冷的，寒冷的;名 寒冷，着凉，感冒"],
        ["collect", "kə-ˈlekt", "[kəˈlekt]", "动 收集，搜索"],
        ["college", "ˈkä-lij", "[ˈkɒlɪdʒ]", "名 学院，大学"],
        ["colour", "ˈkə-lər", "[ˈkʌləʳ]", "名 颜色;动 涂颜色，给……涂颜色"],
        ["comb", "ˈkōm", "[kəʊm]", "名 梳子;动 梳"],
        ["come", "ˈkəm", "[kʌm]", "动 到来"],
        ["comfortable", "ˈkəm-fər-tə-bəl", "[ˈkʌmftəbl]", "形 舒服的，自在的"],
        ["computer", "kəm-ˈpyü-tər", "[kəmˈpjuːtəʳ]", "名 电脑，计算机"],
        ["concert", "ˈkän-sərt", "[ˈkɒnsət]", "名 音乐会，演奏会"],
        ["cook", "ˈku̇k", "[kʊk]", "名 厨师;动 烹饪，做饭"],
        ["cookie", "ˈku̇-kē", "[ˈkʊkɪ]", "名 曲奇饼"],
        ["cool", "ˈkül", "[kuːl]", "形 凉快的，凉爽的;妙极的，酷的"],
        ["copy", "ˈkä-pē", "[ˈkɒpi]", "动 抄写，复制"],
        ["corn", "ˈkȯrn", "[kɔːʳn]", "名 谷物"],
        ["corner", "ˈkȯr-nər", "[ˈkɔːnəʳ]", "名 角，角落，拐角"],
        ["cough", "ˈkȯf", "[kɒf]", "名 咳嗽，咳嗽声;动 咳嗽"],
        ["could", "ˈku̇d", "[kʊd]", "情态 能"],
        ["count", "ˈkau̇nt", "[kaʊnt]", "动 数数"],
        ["country", "ˈkən-trē", "[ˈkʌntrɪ]", "名 国家;乡下，乡村"],
        ["countryside", "ˈkən-trē-ˌsīd", "[ˈkʌntrisaɪd]", "名 乡村，农村"],
        ["course", "ˈkȯrs", "[kɔːs]", "名 课程，讲座"],
        ["cousin", "ˈkə-zən", "[ˈkʌzn]", "名 同辈表亲或堂亲"],
        ["cover", "ˈkə-vər", "[ˈkʌvəʳ]", "动 覆盖;名 封面，封皮"],
        ["cow", "ˈkau̇", "[kaʊ]", "名 母牛"],
        ["crayon", "ˈkrā-ˌän", "[ˈkreɪən]", "名 蜡笔"],
        ["cream", "ˈkrēm", "[ˈkriːm]", "名 奶油，乳脂"],
        ["cross", "ˈkrȯs", "[krɒs]", "名 十字形记号;动 穿越，越过"],
        ["crossing", "ˈkrȯ-siŋ", "[ˈkrɒsɪŋ]", "名 十字路口，交叉道口"],
        ["cry", "ˈkrī", "[kraɪ]", "动 哭"],
        ["cup", "ˈkəp", "[kʌp]", "名 杯子"],
        ["cut", "ˈkət", "[kʌt]", "动 切，割;名 伤口，划伤"],
        ["cute", "ˈkyüt", "[kjuːt]", "形 可爱的"],
        ["dad", "ˈdad", "[dæd]", "名 爸爸"],
        ["dance", "ˈdans", "[dɑːns]", "动 跳舞"],
        ["danger", "ˈdān-jər", "[ˈdeɪndʒəʳ]", "名 危险"],
        ["dangerous", "ˈdān-jə-rəs", "[ˈdeɪndʒərəs]", "形 危险的"],
        ["dark", "ˈdärk", "[dɑːk]", "形 黑暗的"],
        ["date", "ˈdāt", "[deɪt]", "名 日期，年代"],
        ["daughter", "ˈdȯ-tər", "[ˈdɔːtəʳ]", "名 女儿"],
        ["day", "ˈdā", "[deɪ]", "名 一天，白天"],
        ["dead", "ˈded", "[ded]", "形 死的，失去生命的"],
        ["deaf", "ˈdef", "[def]", "形 聋的"],
        ["dear", "ˈdir", "[dɪəʳ]", "形 亲爱的，昂贵的"],
        ["December", "di-ˈsem-bər", "[dɪˈsembəʳ]", "名 十二月"],
        ["decide", "di-ˈsīd", "[dɪˈsaɪd]", "动 决定"],
        ["decision", "di-ˈsi-zhən", "[dɪˈsɪʒn]", "名 决定"],
        ["deep", "ˈdēp", "[diːp]", "形 深的"],
        ["deer", "ˈdir", "[dɪəʳ]", "名 鹿"],
        ["degree", "di-ˈgrē", "[dɪˈgriː]", "名 度数"],
        ["delicious", "di-ˈli-shəs", "[dɪˈlɪʃəs]", "形 美味的，好吃的"],
        ["desert", "ˈde-zərt", "[ˈdezət]", "名 沙漠，荒漠"],
        ["desk", "ˈdesk", "[desk]", "名 书桌，课桌"],
        ["diary", "ˈdī-ə-rē", "[ˈdaɪərɪ]", "名 日记"],
        ["dictionary", "ˈdik-shə-ˌne-rē", "[ˈdɪkʃənrɪ]", "名 字典，词典"],
        ["die", "ˈdī", "[daɪ]", "动 死，死亡"],
        ["difference", "ˈdi-fə-rəns", "[ˈdɪfrəns]", "名 差别，差异"],
        ["different", "ˈdi-fə-rənt", "[ˈdɪfrənt]", "形 不同的，有差异的"],
        ["difficult", "ˈdi-fi-ˌkəlt", "[ˈdɪfɪkəlt]", "形 困难的"],
        ["dinner", "ˈdi-nər", "[ˈdɪnəʳ]", "名 正餐(较丰富的午餐或晚餐)"],
        ["dirty", "ˈdər-tē", "[ˈdɜːtɪ]", "形 脏的"],
        ["do", "ˈdü", "[duː]", "动 做;助动 构成疑问句和否定句"],
        ["doctor", "ˈdäk-tər", "[ˈdɒktəʳ]", "名 医生"],
        ["dog", "ˈdȯg", "[dɒg]", "名 狗"],
        ["doll", "ˈdȯl", "[dɒl]", "名 玩具娃娃，玩偶"],
        ["dollar", "ˈdä-lər", "[ˈdɒləʳ]", "名 元"],
        ["door", "ˈdȯr", "[dɔːʳ]", "名 门"],
        ["down", "ˈdaun ̇", "[daʊn]", "副 向下，朝下"],
        ["dragon", "ˈdra-gən", "[ˈdrægən]", "名 龙"],
        ["draw", "ˈdrȯ", "[drɔː]", "动 画画"],
        ["dream", "ˈdrēm", "[driːm]", "名 梦，梦想;动 做梦"],
        ["dress", "ˈdres", "[dres]", "名 连衣裙;动 穿衣服"],
        ["drink", "ˈdriŋk", "[drɪŋk]", "动 喝;名 饮料"],
        ["drive", "ˈdrīv", "[draɪv]", "动 驾驶，开车"],
        ["driver", "ˈdrī-vər", "[ˈdraɪvəʳ]", "名 司机"],
        ["dry", "ˈdrī", "[draɪ]", "形 干燥的"],
        ["duck", "ˈdək", "[dʌk]", "名 鸭子"],
        ["dumpling", "ˈdəmp-liŋ", "[ˈdʌmplɪŋ]", "名 饺子"],
        ["each", "ˈēch", "[iːtʃ]", "代 各个，每个"],
        ["ear", "ˈir", "[ɪəʳ]", "名 耳朵"],
        ["early", "ˈər-lē", "[ˈɜːlɪ]", "形 早到的"],
        ["earth", "ˈərth", "[ɜːʳθ]", "名 地球，泥土"],
        ["east", "ˈēst", "[iːst]", "名 东，东方;形 东方的;副 向东"],
        ["easy", "ˈē-zē", "[ˈiːzɪ]", "形 容易的"],
        ["eat", "ˈēt", "[iːt]", "动 吃"],
        ["egg", "ˈeg", "[eg]", "名 鸡蛋，蛋，卵"],
        ["eggplant", "ˈeg-ˌplant", "[ˈegplɑːnt]", "名 茄子"],
        ["eight", "ˈāt", "[eɪt]", "数 八"],
        ["eighteen", "ˈā-ˈtēn", "[ˌeɪˈtiːn]", "数 十八"],
        ["eighth", "ˈātth", "[eɪtθ]", "数 第八"],
        ["eighty", "ˈā-tē", "[ˈeɪtɪ]", "数 八十"],
        ["either", "ˈē-t͟hər", "[ˈaɪðə]", "代 (两者中)任何一个;副 也(用于否定句末)"],
        ["electric", "i-ˈlek-trik", "[ɪˈlektrɪk]", "形 电的，用电的"],
        ["elephant", "ˈe-lə-fənt", "[ˈelɪfənt]", "名 大象，象"],
        ["eleven", "i-ˈle-vən", "[ɪˈlevn]", "数 十一"],
        ["else", "ˈels", "[els]", "副 其他，另外"],
        ["email", "ˈē-ˌmāl", "[ˈiːmeɪl]", "名 电子邮件;动 给…发电子邮件"],
        ["empty", "ˈemp-tē", "[ˈemptɪ]", "形 空的"],
        ["end", "ˈend", "[end]", "名 末尾，终点，结束"],
        ["enemy", "ˈe-nə-mē", "[ˈenəmɪ]", "名 敌人"],
        ["engineer", "ˌen-jə-ˈnir", "[ˌendʒɪˈnɪəʳ]", "名 工程师，设计师"],
        ["England", "ˈiŋ-glənd", "[ˈɪŋɡlənd]", "名 英格兰"],
        ["English", "ˈiŋ-glish", "[ˈɪŋglɪʃ]", "名 英语;形 英语的，英格兰的"],
        ["enjoy", "in-ˈjȯi", "[ɪnˈdʒɔɪ]", "动 享受…的乐趣，喜爱"],
        ["enough", "i-ˈnəf", "[ɪˈnʌf]", "形 足够的;副 足够地，充分地"],
        ["enter", "ˈen-tər", "[ˈentəʳ]", "动 进入，进来"],
        ["environment", "in-ˈvī-rən-mənt", "[ɪnˈvaɪrənmənt]", "名 环境"],
        ["eraser", "i-ˈrā-sər", "[ɪˈreɪzəʳ]", "名 橡皮"],
        ["Europe", "ˈyu-̇rəp", "[ˈjʊərəp]", "名 欧洲"],
        ["eve", "ˈēv", "[iːv]", "名 前夕，前夜"],
        ["even", "ˈē-vən", "[ˈiːvn]", "副 甚至"],
        ["evening", "ˈēv-niŋ", "[ˈiːvnɪŋ]", "名 傍晚，晚上"],
        ["every", "ˈev-rē", "[ˈevrɪ]", "限定 每个"],
        ["everybody", "ˈev-rē-ˌbə-dē", "[ˈevrɪbɒdɪ]", "代 每人，人人"],
        ["everyday", "ˈev-rē-ˌdā", "[ˈevrɪdeɪ]", "形 每天的，日常的"],
        ["everyone", "ˈev-rē-ˌwən", "[ˈevrɪwʌn]", "代 每人，人人"],
        ["everything", "ˈev-rē-ˌthiŋ", "[ˈevrɪθɪŋ]", "代 所有事物，一切"],
        ["everywhere", "ˈev-rē-ˌwer", "[ˈevrɪweəʳ]", "副 到处"],
        ["exam", "ig-ˈzam", "[ɪgˈzæm]", "名 考试"],
        ["example", "ig-ˈzam-pəl", "[ɪgˈzɑːmpl]", "名 例子"],
        ["excite", "ik-ˈsīt", "[ɪkˈsaɪt]", "动 使兴奋，使激动"],
        ["excited", "ik-ˈsī-təd", "[ɪkˈsaɪtɪd]", "形 激动的，兴奋的"],
        ["exciting", "ik-ˈsī-tiŋ", "[ɪkˈsaɪtɪŋ]", "形 令人激动的，使人兴奋地"],
        ["excuse", "ik-ˈskyüz", "[ɪkˈskjuːz]", "动 原谅，宽恕"],
        ["exercise", "ˈek-sər-ˌsīz", "[ˈeksəsaɪz]", "名 运动，练习;名 锻炼"],
        ["expensive", "ik-ˈspen-siv", "[ɪkˈspensɪv]", "形 昂贵的"],
        ["explain", "ik-ˈsplān", "[ɪkˈspleɪn]", "动 解释"],
        ["eye", "ˈī", "[aɪ]", "名 眼睛"],
        ["face", "ˈfās", "[feɪs]", "名 脸，面孔;动 面对"],
        ["factory", "ˈfak-tə-rē", "[ˈfæktrɪ]", "名 工厂"],
        ["fail", "ˈfāl", "[feɪl]", "动 失败，不及格"],
        ["fall", "ˈfȯl", "[fɔːl]", "动 落下;名 秋天"],
        ["family", "ˈfa-mə-lē", "[ˈfæmɪlɪ]", "名 家，家庭"],
        ["famous", "ˈfā-məs", "[ˈfeɪməs]", "形 著名的"],
        ["fan", "ˈfan", "[fæn]", "名 扇子，风扇;迷，狂热爱好者"],
        ["far", "ˈfär", "[fɑːʳ]", "形/副 远的，远"],
        ["farm", "ˈfärm", "[fɑːm]", "名 农场，养殖场"],
        ["farmer", "ˈfär-mər", "[ˈfɑːməʳ]", "名 农民"],
        ["fast", "ˈfast", "[fɑːst]", "形 快(的)，迅速(的)"],
        ["fat", "ˈfat", "[fæt]", "形 肥胖的"],
        ["father", "ˈfä-t͟hər", "[fɑːðəʳ]", "名 父亲，爸爸"],
        ["favourite", "ˈfā-və-rət", "[feɪvərɪt]", "形 特别受喜爱的"],
        ["fax", "ˈfaks", "[fæks]", "动 传真;名 传真机"],
        ["February", "ˈfe-brə-ˌwe-rē", "[februəri]", "名 二月"],
        ["fee", "ˈfē", "[fiː]", "名 报酬，专业服务费"],
        ["feed", "ˈfēd", "[fiːd]", "动 喂养，饲养"],
        ["feel", "ˈfēl", "[fiːl]", "动 感觉，摸"],
        ["festival", "ˈfe-stə-vəl", "[festɪvəl]", "名 节日"],
        ["fever", "ˈfē-vər", "[fiːvəʳ]", "名 发热，发烧"],
        ["few", "ˈfyü", "[fjuː]", "形 很少，几乎没有"],
        ["field", "ˈfēld", "[fiːld]", "名 田，地，牧场"],
        ["fifteen", "ˌfif-ˈtēn", "[ˈfɪfˈtiːn]", "数 十五"],
        ["fifth", "ˈfith", "[fɪfθ]", "数 第五"],
        ["fifty", "ˈfif-tē", "[ˈfɪftɪ]", "数 五十"],
        ["fight", "ˈfīt", "[faɪt]", "动 打架，争斗"],
        ["film", "ˈfilm", "[fɪlm]", "名 电影，胶卷，影片"],
        ["final", "ˈfī-nᵊl", "[ˈfaɪnəl]", "形 最后的，最终的"],
        ["finally", "ˈfī-nᵊl-ē", "[ˈfaɪnəlɪ]", "副 终于，最终"],
        ["find", "ˈfīnd", "[faɪnd]", "动 找到，发现"],
        ["fine", "ˈfīn", "[faɪn]", "形 晴朗的，健康的"],
        ["finger", "ˈfiŋ-gər", "[ˈfɪŋɡə]", "名 手指"],
        ["finish", "ˈfi-nish", "[ˈfɪnɪʃ]", "动 结束，做好"],
        ["fire", "ˈfīr", "[ˈfaɪəʳ]", "名 火"],
        ["first", "ˈfərst", "[fɜːst]", "数 第一;副 首先，最初"],
        ["fish", "ˈfish", "[fɪʃ]", "名 鱼，鱼肉;动 钓鱼"],
        ["fisherman", "ˈfi-shər-mən", "[ˈfɪʃəmən]", "名 渔民"],
        ["five", "ˈfīv", "[faɪv]", "数 五"],
        ["flag", "ˈflag", "[flæɡ]", "名 旗"],
        ["floor", "ˈflȯr", "[flɔːʳ]", "名 地板，地面，楼层"],
        ["flower", "ˈflau̇r", "[ˈflaʊəʳ]", "名 花"],
        ["flu", "ˈflü", "[fluː]", "名 流感"],
        ["fly", "ˈflī", "[flaɪ]", "动 飞，飞行;名 苍蝇"],
        ["FM", "ˈef-ˌem", "[ˈefˌem]", "调频"],
        ["fog", "ˈfȯg", "[fɒɡ]", "名 雾"],
        ["follow", "ˈfä-ˌlō", "[ˈfɒləʊ]", "动 跟随"],
        ["food", "ˈfüd", "[fuːd]", "名 食物"],
        ["fool", "ˈfül", "[fuːl]", "名 傻瓜"],
        ["foolish", "ˈfü-lish", "[ˈfuːlɪʃ]", "形 笨的，蠢的"],
        ["foot", "ˈfu̇t", "[fʊt]", "名 脚"],
        ["football", "ˈfu̇t-ˌbȯl", "[ˈfʊtˌbɔːl]", "名 足球，足球运动"],
        ["for", "ˈfȯr", "[fɔːʳ]", "介 为了，给"],
        ["foreign", "ˈfȯ-rən", "[ˈfɒrən]", "形 外国的"],
        ["forest", "ˈfȯ-rəst", "[ˈfɒrɪst]", "名 森林"],
        ["forget", "fər-ˈget", "[fəˈɡɛt]", "动 忘记，忘掉"],
        ["fork", "ˈfȯrk", "[fɔːk]", "名 叉子"],
        ["forty", "ˈfȯr-tē", "[ˈfɔːtɪ]", "数 四十"],
        ["four", "ˈfȯr", "[fɔːʳ]", "数 四"],
        ["fourteen", "fȯr-ˈtēn", "[ˌfɔːˈtiːn]", "数 十四"],
        ["fourth", "ˈfȯrth", "[fɔːθ]", "数 第四"],
        ["fox", "ˈfäks", "[fɒks]", "名 狐狸"],
        ["France", "ˈfrans", "[frɑːns]", "名 法国"],
        ["Frenchman", "ˈfrench-mən", "[ˈfrentʃmən]", "名 法国人"],
        ["free", "ˈfrē", "[friː]", "形 自由的，免费的"],
        ["fresh", "ˈfresh", "[freʃ]", "形 新鲜的，无盐的"],
        ["Friday", "ˈfrī-ˌdā", "[ˈfraɪdeɪ]", "名 星期五"],
        ["fridge", "ˈfrij", "[frɪdʒ]", "名 冰箱"],
        ["friend", "ˈfrend", "[frend]", "名 朋友"],
        ["friendly", "ˈfrend-lē", "[ˈfrendlɪ]", "形 友好的"],
        ["from", "ˈfrəm", "[frɒm]", "介 来自，从…来"],
        ["front", "ˈfrənt", "[frʌnt]", "名 前面，前部"],
        ["fruit", "ˈfrüt", "[fruːt]", "名 水果"],
        ["fry", "ˈfrī", "[fraɪ]", "动 油煎，油炸"],
        ["full", "ˈfu̇l", "[fʊl]", "形 满的，饱的"],
        ["fun", "ˈfən", "[fʌn]", "名 乐趣，快乐"],
        ["funny", "ˈfə-nē", "[ˈfʌnɪ]", "形 滑稽的，好玩的"],
        ["further", "ˈfər-t͟hər", "[ˈfɜːðəʳ]", "副 (距离、时间上)较远，更远"],
        ["future", "ˈfyü-chər", "[ˈfjuːtʃəʳ]", "名 将来"],
        ["game", "ˈgām", "[geɪm]", "名 游戏，运动，比赛"],
        ["garden", "ˈgär-dᵊn", "[ˈgɑːdən]", "名 花园，果园，菜园"],
        ["gate", "ˈgāt", "[geɪt]", "名 大门，大门口"],
        ["geography", "jē-ˈä-grə-fē", "[dʒiˈɒgrəfɪ]", "名 地理"],
        ["German", "ˈjər-mən", "[ˈdʒɜːmən]", "名 德国人，德语;形 德国的，德国人的，德语的"],
        ["Germany", "ˈjər-mə-nē", "[ˈdʒɜːmənɪ]", "名 德国"],
        ["get", "ˈget", "[get]", "动 得到"],
        ["gift", "ˈgift", "[gɪft]", "名 礼物"],
        ["giraffe", "jə-ˈraf", "[dʒəˈrɑːf]", "名 长颈鹿"],
        ["girl", "ˈgərl", "[gɜːl]", "名 女孩"],
        ["give", "ˈgiv", "[gɪv]", "动 给，递给，给予，付出"],
        ["glad", "ˈglad", "[glæd]", "形 高兴的，乐意的"],
        ["glass", "ˈglas", "[glɑːs]", "名 玻璃;玻璃杯;眼镜(复数)"],
        ["glove", "ˈgləv", "[glʌv]", "名 手套"],
        ["glue", "ˈglü", "[gluː]", "名 胶水"],
        ["go", "ˈgō", "[gəʊ]", "动 去，离开"],
        ["goat", "ˈgōt", "[gəʊt]", "名 山羊"],
        ["gold", "ˈgōld", "[gəʊld]", "名 金"],
        ["golf", "ˈgälf", "[gɒlf]", "名 高尔夫球运动"],
        ["good", "ˈgud ̇", "[gʊd]", "形 好的，良好的"],
        ["goodbye", "guḋ -ˈbī", "[ˌgʊdˈbaɪ]", "感叹 再见，再会"],
        ["goose", "ˈgüs", "[guːs]", "名 鹅"],
        ["grade", "ˈgrād", "[greɪd]", "名 年级，等级"],
        ["granddaughter", "ˈgrand-ˌdȯ-tər", "[ˈgrændɔːtəʳ]", "名 (外)孙女"],
        ["grandfather", "ˈgrand-ˌfä-t͟hər", "[ˈgrænfɑːðəʳ]", "名 (外)祖父"],
        ["grandmother", "ˈgrand-ˌmə-t͟hər", "[ˈgrænmʌðəʳ]", "名 (外)祖母"],
        ["grandparent", "ˈgrand-ˌper-ənt", "[ˈgrænpeərənt]", "名 (外)祖父、母"],
        ["grandson", "ˈgrand-ˌsən", "[ˈgrænsʌn]", "名 (外)孙子"],
        ["grape", "ˈgrāp", "[greɪp]", "名 葡萄"],
        ["grass", "ˈgras", "[grɑːs]", "名 草，草场，牧草"],
        ["great", "ˈgrāt", "[greɪt]", "形 伟大的，重要的"],
        ["green", "ˈgrēn", "[griːn]", "形 绿色的;名 绿色"],
        ["grey", "ˈgrā", "[greɪ]", "形 灰色的;名 灰色"],
        ["ground", "ˈgraund ̇", "[graʊnd]", "名 地，地面，场地"],
        ["group", "ˈgrüp", "[gruːp]", "名 群，组"],
        ["grow", "ˈgrō", "[grəʊ]", "动 生长，发育，扩大"],
        ["guess", "ˈges", "[ges]", "动 猜，猜想，猜测"],
        ["guest", "ˈgest", "[gest]", "名 客人，宾客"],
        ["guide", "ˈgīd", "[gaɪd]", "名 导游，向导"],
        ["guitar", "gə-ˈtär", "[gɪˈtɑːʳ]", "名 吉他"],
        ["habit", "ˈha-bət", "[hæbɪt]", "名 习惯，习性，行为"],
        ["hair", "ˈher", "[heəʳ]", "名 头发"],
        ["half", "ˈhaf", "[hɑːf]", "名 半，一半;代 半数"],
        ["hall", "ˈhȯl", "[hɔːl]", "名 大厅"],
        ["hamburger", "ˈham-ˌbər-gər", "[hæmbɜːʳgəʳ]", "名 汉堡包"],
        ["hand", "ˈhand", "[hænd]", "名 手，(钟表的)指针;动 传递"],
        ["handsome", "ˈhan-səm", "[hænsəm]", "形 (男子)英俊的"],
        ["hang", "ˈhaŋ", "[hæŋ]", "动 悬挂"],
        ["happy", "ˈha-pē", "[hæpi]", "形 快乐的，幸福的，满意的"],
        ["hard", "ˈhärd", "[hɑːʳd]", "形 坚硬的，难做的;副 努力地，猛烈地"],
        ["hardly", "ˈhärd-lē", "[hɑːʳdli]", "副 几乎不"],
        ["hat", "ˈhat", "[hæt]", "名 常指带檐的帽子"],
        ["hate", "ˈhāt", "[heɪt]", "动 憎恨，讨厌"],
        ["have", "ˈhav", "[hæv]", "动 有，吃，喝"],
        ["he", "ˈhē", "[hiː]", "代 他"],
        ["head", "ˈhed", "[hed]", "名 头，头部，头脑"],
        ["headache", "ˈhed-ˌāk", "[ˈhedeɪk]", "名 头痛"],
        ["health", "ˈhelth", "[helθ]", "名 健康"],
        ["healthy", "ˈhel-thē", "[ˈhelθɪ]", "形 健康的"],
        ["hear", "ˈhir", "[hɪəʳ]", "动 听见，听说，得知"],
        ["heart", "ˈhärt", "[hɑːt]", "名 心，心脏"],
        ["heavy", "ˈhe-vē", "[ˈhevɪ]", "形 重的"],
        ["height", "ˈhīt", "[haɪt]", "名 高度"],
        ]

}