// Add your code here

 let words_Primary = [
    ["about", "介 关于;副 大约"],
    ["above", "介 在/向…上面"],
    ["across", "介 横过，穿过，在…对面;副 横过，从一边到另一边"],
    ["act", "动 表演"],
    ["active", "形 积极的，活跃的"],
    ["actor", "名 男演员"],
    ["ad", "名 广告"],
    ["address", "名 地址"],
    ["afraid", "形 害怕的，担心的"],
    ["after", "介 在…之后"],
    ["afternoon", "名 下午"],
    ["again", "副 又一次，再一次"],
    ["age", "名 年龄"],
    ["ago", "副 以前"],
    ["air", "名 空气;空中(the air)"],
    ["airport", "名 飞机场"],
    ["alarm", "名 闹钟"],
    ["all", "形 全部的，所有的，一切的;代 全体，全部"],
    ["almost", "副 几乎，差不多"],
    ["along", "介 沿着;副 向前，与……一起"],
    ["also", "副 还，也"],
    ["always", "副 总是"],
    ["a.m.", "ˈā-ˌem", "[ˌeɪˈem]", "上午"],
    ["American", "形 美洲的，美国的;名 美国人，美洲人，美式英语"],
    ["and", "连 和，与"],
    ["angry", "形 愤怒的，生气的"],
    ["animal", "名 动物"],
    ["answer", "名 答案;动 回答，应答"],
    ["ant", "名 蚂蚁"],
    ["any", "代 一些，任何的"],
    ["anybody", "代 任何人，有人"],
    ["anyone", "代 任何人，随便哪个人"],
    ["anything", "代 任何事物"],
    ["anywhere", "副 在任何地方;代 无论何处，任何地方"],
    ["apple", "名 苹果"],
    ["April", "名 四月"],
    ["arm", "名 胳膊"],
    ["army", "名 军队，陆军"],
    ["arrive", "动 到达，达到"],
    ["art", "名 艺术，美术，艺术作品;文科"],
    ["ask", "动 询问，邀请"],
    ["at", "介 在……;在……时刻;(表目标和方向)向，对"],
    ["attention", "名 注意"],
    ["August", "名 八月"],
    ["aunt", "名 婶娘，姑妈，伯母，舅母，姨妈"],
    ["Australia", "名 澳大利亚"],
    ["autumn", "名 秋天"],
    ["baby", "名 婴儿"],
    ["back", "名 后背，背部;形 后面的;副 向后，回原处"],
    ["bad", "形 坏的，有害的，严重的，使人不高兴的"],
    ["bag", "名 书包，手提袋，袋子"],
    ["ball", "名 球"],
    ["bamboo", "名 竹子"],
    ["banana", "名 香蕉"],
    ["bank", "名 岸，堤;银行"],
    ["basket", "名 篮子，筐"],
    ["basketball", "名 篮球，篮球运动"],
    ["bathroom", "名 浴室"],
    ["beach", "名 海滩"],
    ["bear", "名 熊"],
    ["beautiful", "形 (人)美丽的，漂亮的;(天气)美好的"],
    ["because", "连 因为"],
    ["become", "动 开始变得，变成"],
    ["bed", "名 床"],
    ["bee", "名 蜜蜂"],
    ["beef", "名 牛肉"],
    ["before", "介 在……前面;副 以前"],
    ["begin", "动 开始，着手"],
    ["behind", "介 在……后面"],
    ["believe", "动 相信，认为"],
    ["bell", "名 钟，铃"],
    ["belt", "名 皮带，腰带"],
    ["beside", "介 在……旁边"],
    ["best", "形 最好的;副 最，最好地"],
    ["better", "形 比较好的，更好的;副 更好地"],
    ["between", "介 在……之间"],
    ["bicycle", "名 自行车"],
    ["big", "形 大的"],
    ["bike", "名 自行车"],
    ["bird", "名 鸟"],
    ["birth", "动 出生"],
    ["birthday", "名 生日"],
    ["bit", "名 有点儿，小块"],
    ["black", "形 黑色的;名 黑色"],
    ["blackboard", "名 黑板"],
    ["blind", "形 失明的"],
    ["blow", "动 吹，刮"],
    ["blue", "形 蓝色的;名 蓝色"],
    ["boat", "名 小船"],
    ["body", "名 身体"],
    ["boil", "动 煮沸，烧开;名 沸点"],
    ["bone", "名 骨头"],
    ["book", "名 书;动 预定"],
    ["boot", "名 靴子"],
    ["born", "形 天生的，生来的;动 出生"],
    ["borrow", "动 (向别人)借"],
    ["boss", "名 老板，上司"],
    ["both", "代 两个，两个都"],
    ["bottle", "名 瓶子"],
    ["bowl", "名 碗"],
    ["box", "名 盒子，箱子;动 (拳击运动)击打(某人)"],
    ["boy", "名 男孩"],
    ["brave", "形 勇敢的"],
    ["bread", "名 面包"],
    ["breakfast", "名 早餐"],
    ["bridge", "名 桥"],
    ["bright", "形 明亮的，灿烂的，聪明的，伶俐的"],
    ["bring", "动 带来，拿来"],
    ["Britain", "名 不列颠(包括英格兰、苏格兰和威尔士)"],
    ["British", "形 英国的，英国人的"],
    ["brother", "名 兄，弟"],
    ["brown", "形 棕色的，褐色的;名 棕色，褐色"],
    ["brush", "名 刷子，毛刷，画笔;动 (用刷子)刷"],
    ["build", "动 建造，建筑"],
    ["building", "名 建筑物；楼房"],
    ["bus", "名 公共汽车"],
    ["busy", "形 忙碌的，忙的"],
    ["but", "连 但是;介 除…以外"],
    ["buy", "动 购买"],
    ["by", "介 再…旁边，靠近;在……之前;乘(某种交通工具);由于"],
    ["café", "ka-ˈfā", "[ˈkæfeɪ]", "名 咖啡馆"],
    ["cage", "名 笼子;动 把(动物）关在笼中"],
    ["cake", "名 蛋糕"],
    ["call", "动 叫，呼叫，称呼;名 通话"],
    ["camera", "名 照相机"],
    ["camp", "名 野营"],
    ["can", "名 罐头，金属罐;情态 能够，会"],
    ["Canada", "名 加拿大"],
    ["candle", "名 蜡烛"],
    ["candy", "名 糖果"],
    ["cap", "名 帽子"],
    ["capital", "名 首都，省会"],
    ["car", "动 小汽车"],
    ["card", "名 贺卡，请帖，卡片"],
    ["care", "名 照顾，照料;动 担忧；在意"],
    ["careful", "形 小心的，仔细地，谨慎的"],
    ["carrot", "名 胡萝卜"],
    ["carry", "动 搬运，运送，手提"],
    ["cartoon", "名 漫画，动画片，卡通片"],
    ["cat", "名 猫"],
    ["catch", "动 抓住，捉补，赶上，患上(疾病)"],
    ["CD", "名 光盘，激光唱片"],
    ["cent", "名 分"],
    ["centre", "名 中心，中央"],
    ["century", "名 世纪，百年"],
    ["certainly", "副 当然"],
    ["chair", "名 椅子;(大学的)系主任"],
    ["chalk", "名 粉笔"],
    ["cheap", "形 便宜的，廉价的"],
    ["check", "动 检查，核对"],
    ["cheese", "名 乳酪，干酪，奶酪"],
    ["chemistry", "名 化学"],
    ["chess", "名 国际象棋"],
    ["chicken", "名 小鸡，鸡肉"],
    ["child", "名 孩子，儿童"],
    ["China", "名 中国"],
    ["china", "名 瓷器"],
    ["Chinese", "名 汉语，中国人;形 中国的，中国人的"],
    ["chocolate", "名 巧克力"],
    ["chopstick", "名 筷子"],
    ["cinema", "名 电影院"],
    ["circle", "名 圆圈;动 画圈"],
    ["city", "名 城市"],
    ["class", "名 班级，课"],
    ["classroom", "名 教室"],
    ["clean", "形 干净的，清洁的;动 打扫，弄干净"],
    ["clear", "形 清晰的；晴朗的；明白的；显然的"],
    ["clever", "形 聪明的，伶俐的"],
    ["climb", "动 爬"],
    ["clock", "名 钟"],
    ["close", "动 关闭;形 接近；亲密的"],
    ["cloth", "名 布料"],
    ["clothes", "名 (泛指)衣服"],
    ["clothing", "名 某种服装"],
    ["cloud", "名 云"],
    ["cloudy", "形 多云的，阴天的"],
    ["club", "名 俱乐部"],
    ["coach", "名 教练"],
    ["coal", "名 煤"],
    ["coat", "名 外套，大衣"],
    ["coffee", "名 咖啡，咖啡饮料"],
    ["coin", "名 硬币"],
    ["Coke", "名 可乐"],
    ["cold", "形 冷的，寒冷的;名 寒冷，着凉，感冒"],
    ["collect", "动 收集，搜索"],
    ["college", "名 学院，大学"],
    ["colour", "名 颜色;动 涂颜色，给……涂颜色"],
    ["comb", "名 梳子;动 梳"],
    ["come", "动 到来"],
    ["comfortable", "形 舒服的，自在的"],
    ["computer", "名 电脑，计算机"],
    ["concert", "名 音乐会，演奏会"],
    ["cook", "名 厨师;动 烹饪，做饭"],
    ["cookie", "名 曲奇饼"],
    ["cool", "形 凉快的，凉爽的;妙极的，酷的"],
    ["copy", "动 抄写，复制"],
    ["corn", "名 谷物"],
    ["corner", "名 角，角落，拐角"],
    ["cough", "名 咳嗽，咳嗽声;动 咳嗽"],
    ["could", "情态 能"],
    ["count", "动 数数"],
    ["country", "名 国家;乡下，乡村"],
    ["countryside", "名 乡村，农村"],
    ["course", "名 课程，讲座"],
    ["cousin", "名 同辈表亲或堂亲"],
    ["cover", "动 覆盖;名 封面，封皮"],
    ["cow", "名 母牛"],
    ["crayon", "名 蜡笔"],
    ["cream", "名 奶油，乳脂"],
    ["cross", "名 十字形记号;动 穿越，越过"],
    ["crossing", "名 十字路口，交叉道口"],
    ["cry", "动 哭"],
    ["cup", "名 杯子"],
    ["cut", "动 切，割;名 伤口，划伤"],
    ["cute", "形 可爱的"],
    ["dad", "名 爸爸"],
    ["dance", "动 跳舞"],
    ["danger", "名 危险"],
    ["dangerous", "形 危险的"],
    ["dark", "形 黑暗的"],
    ["date", "名 日期，年代"],
    ["daughter", "名 女儿"],
    ["day", "名 一天，白天"],
    ["dead", "形 死的，失去生命的"],
    ["deaf", "形 聋的"],
    ["dear", "形 亲爱的，昂贵的"],
    ["December", "名 十二月"],
    ["decide", "动 决定"],
    ["decision", "名 决定"],
    ["deep", "形 深的"],
    ["deer", "名 鹿"],
    ["degree", "名 度数"],
    ["delicious", "形 美味的，好吃的"],
    ["desert", "名 沙漠，荒漠"],
    ["desk", "名 书桌，课桌"],
    ["diary", "名 日记"],
    ["dictionary", "名 字典，词典"],
    ["die", "动 死，死亡"],
    ["difference", "名 差别，差异"],
    ["different", "形 不同的，有差异的"],
    ["difficult", "形 困难的"],
    ["dinner", "名 正餐(较丰富的午餐或晚餐)"],
    ["dirty", "形 脏的"],
    ["do", "动 做;助动 构成疑问句和否定句"],
    ["doctor", "名 医生"],
    ["dog", "名 狗"],
    ["doll", "名 玩具娃娃，玩偶"],
    ["dollar", "名 元"],
    ["door", "名 门"],
    ["down", "副 向下，朝下"],
    ["dragon", "名 龙"],
    ["draw", "动 画画"],
    ["dream", "名 梦，梦想;动 做梦"],
    ["dress", "名 连衣裙;动 穿衣服"],
    ["drink", "动 喝;名 饮料"],
    ["drive", "动 驾驶，开车"],
    ["driver", "名 司机"],
    ["dry", "形 干燥的"],
    ["duck", "名 鸭子"],
    ["dumpling", "名 饺子"],
    ["each", "代 各个，每个"],
    ["ear", "名 耳朵"],
    ["early", "形 早到的"],
    ["earth", "名 地球，泥土"],
    ["east", "名 东，东方;形 东方的;副 向东"],
    ["easy", "形 容易的"],
    ["eat", "动 吃"],
    ["egg", "名 鸡蛋，蛋，卵"],
    ["eggplant", "名 茄子"],
    ["eight", "数 八"],
    ["eighteen", "数 十八"],
    ["eighth", "数 第八"],
    ["eighty", "数 八十"],
    ["either", "代 (两者中)任何一个;副 也(用于否定句末)"],
    ["electric", "形 电的，用电的"],
    ["elephant", "名 大象，象"],
    ["eleven", "数 十一"],
    ["else", "副 其他，另外"],
    ["email", "名 电子邮件;动 给…发电子邮件"],
    ["empty", "形 空的"],
    ["end", "名 末尾，终点，结束"],
    ["enemy", "名 敌人"],
    ["engineer", "名 工程师，设计师"],
    ["England", "名 英格兰"],
    ["English", "名 英语;形 英语的，英格兰的"],
    ["enjoy", "动 享受…的乐趣，喜爱"],
    ["enough", "形 足够的;副 足够地，充分地"],
    ["enter", "动 进入，进来"],
    ["environment", "名 环境"],
    ["eraser", "名 橡皮"],
    ["Europe", "名 欧洲"],
    ["eve", "名 前夕，前夜"],
    ["even", "副 甚至"],
    ["evening", "名 傍晚，晚上"],
    ["every", "限定 每个"],
    ["everybody", "代 每人，人人"],
    ["everyday", "形 每天的，日常的"],
    ["everyone", "代 每人，人人"],
    ["everything", "代 所有事物，一切"],
    ["everywhere", "副 到处"],
    ["exam", "名 考试"],
    ["example", "名 例子"],
    ["excite", "动 使兴奋，使激动"],
    ["excited", "形 激动的，兴奋的"],
    ["exciting", "形 令人激动的，使人兴奋地"],
    ["excuse", "动 原谅，宽恕"],
    ["exercise", "名 运动，练习;名 锻炼"],
    ["expensive", "形 昂贵的"],
    ["explain", "动 解释"],
    ["eye", "名 眼睛"],
    ["face", "名 脸，面孔;动 面对"],
    ["factory", "名 工厂"],
    ["fail", "动 失败，不及格"],
    ["fall", "动 落下;名 秋天"],
    ["family", "名 家，家庭"],
    ["famous", "形 著名的"],
    ["fan", "名 扇子，风扇;迷，狂热爱好者"],
    ["far", "形/副 远的，远"],
    ["farm", "名 农场，养殖场"],
    ["farmer", "名 农民"],
    ["fast", "形 快(的)，迅速(的)"],
    ["fat", "形 肥胖的"],
    ["father", "名 父亲，爸爸"],
    ["favourite", "形 特别受喜爱的"],
    ["fax", "动 传真;名 传真机"],
    ["February", "名 二月"],
    ["fee", "名 报酬，专业服务费"],
    ["feed", "动 喂养，饲养"],
    ["feel", "动 感觉，摸"],
    ["festival", "名 节日"],
    ["fever", "名 发热，发烧"],
    ["few", "形 很少，几乎没有"],
    ["field", "名 田，地，牧场"],
    ["fifteen", "数 十五"],
    ["fifth", "数 第五"],
    ["fifty", "数 五十"],
    ["fight", "动 打架，争斗"],
    ["film", "名 电影，胶卷，影片"],
    ["final", "形 最后的，最终的"],
    ["finally", "副 终于，最终"],
    ["find", "动 找到，发现"],
    ["fine", "形 晴朗的，健康的"],
    ["finger", "名 手指"],
    ["finish", "动 结束，做好"],
    ["fire", "名 火"],
    ["first", "数 第一;副 首先，最初"],
    ["fish", "名 鱼，鱼肉;动 钓鱼"],
    ["fisherman", "名 渔民"],
    ["five", "数 五"],
    ["flag", "名 旗"],
    ["floor", "名 地板，地面，楼层"],
    ["flower", "名 花"],
    ["flu", "名 流感"],
    ["fly", "动 飞，飞行;名 苍蝇"],
    ["FM", "调频"],
    ["fog", "名 雾"],
    ["follow", "动 跟随"],
    ["food", "名 食物"],
    ["fool", "名 傻瓜"],
    ["foolish", "形 笨的，蠢的"],
    ["foot", "名 脚"],
    ["football", "名 足球，足球运动"],
    ["for", "介 为了，给"],
    ["foreign", "形 外国的"],
    ["forest", "名 森林"],
    ["forget", "动 忘记，忘掉"],
    ["fork", "名 叉子"],
    ["forty", "数 四十"],
    ["four", "数 四"],
    ["fourteen", "数 十四"],
    ["fourth", "数 第四"],
    ["fox", "名 狐狸"],
    ["France", "名 法国"],
    ["Frenchman", "名 法国人"],
    ["free", "形 自由的，免费的"],
    ["fresh", "形 新鲜的，无盐的"],
    ["Friday", "名 星期五"],
    ["fridge", "名 冰箱"],
    ["friend", "名 朋友"],
    ["friendly", "形 友好的"],
    ["from", "介 来自，从…来"],
    ["front", "名 前面，前部"],
    ["fruit", "名 水果"],
    ["fry", "动 油煎，油炸"],
    ["full", "形 满的，饱的"],
    ["fun", "名 乐趣，快乐"],
    ["funny", "形 滑稽的，好玩的"],
    ["further", "副 (距离、时间上)较远，更远"],
    ["future", "名 将来"],
    ["game", "名 游戏，运动，比赛"],
    ["garden", "名 花园，果园，菜园"],
    ["gate", "名 大门，大门口"],
    ["geography", "名 地理"],
    ["German", "名 德国人，德语;形 德国的，德国人的，德语的"],
    ["Germany", "名 德国"],
    ["get", "动 得到"],
    ["gift", "名 礼物"],
    ["giraffe", "名 长颈鹿"],
    ["girl", "名 女孩"],
    ["give", "动 给，递给，给予，付出"],
    ["glad", "形 高兴的，乐意的"],
    ["glass", "名 玻璃;玻璃杯;眼镜(复数)"],
    ["glove", "名 手套"],
    ["glue", "名 胶水"],
    ["go", "动 去，离开"],
    ["goat", "名 山羊"],
    ["gold", "名 金"],
    ["golf", "名 高尔夫球运动"],
    ["good", "形 好的，良好的"],
    ["goodbye", "感叹 再见，再会"],
    ["goose", "名 鹅"],
    ["grade", "名 年级，等级"],
    ["granddaughter", "名 (外)孙女"],
    ["grandfather", "名 (外)祖父"],
    ["grandmother", "名 (外)祖母"],
    ["grandparent", "名 (外)祖父、母"],
    ["grandson", "名 (外)孙子"],
    ["grape", "名 葡萄"],
    ["grass", "名 草，草场，牧草"],
    ["great", "形 伟大的，重要的"],
    ["green", "形 绿色的;名 绿色"],
    ["grey", "形 灰色的;名 灰色"],
    ["ground", "名 地，地面，场地"],
    ["group", "名 群，组"],
    ["grow", "动 生长，发育，扩大"],
    ["guess", "动 猜，猜想，猜测"],
    ["guest", "名 客人，宾客"],
    ["guide", "名 导游，向导"],
    ["guitar", "名 吉他"],
    ["habit", "名 习惯，习性，行为"],
    ["hair", "名 头发"],
    ["half", "名 半，一半;代 半数"],
    ["hall", "名 大厅"],
    ["hamburger", "名 汉堡包"],
    ["hand", "名 手，(钟表的)指针;动 传递"],
    ["handsome", "形 (男子)英俊的"],
    ["hang", "动 悬挂"],
    ["happy", "形 快乐的，幸福的，满意的"],
    ["hard", "形 坚硬的，难做的;副 努力地，猛烈地"],
    ["hardly", "副 几乎不"],
    ["hat", "名 常指带檐的帽子"],
    ["hate", "动 憎恨，讨厌"],
    ["have", "动 有，吃，喝"],
    ["he", "代 他"],
    ["head", "名 头，头部，头脑"],
    ["headache", "名 头痛"],
    ["health", "名 健康"],
    ["healthy", "形 健康的"],
    ["hear", "动 听见，听说，得知"],
    ["heart", "名 心，心脏"],
    ["heavy", "形 重的"],
    ["height", "名 高度"],
    ["hello", "感叹 (问候、接电话或引起注意)你好"],
    ["help", "动 帮助;名 帮助"],
    ["helpful", "形 有用的"],
    ["hen", "名 母鸡"],
    ["her", "代 她，她的"],
    ["here", "副 在这里"],
    ["hero", "名 英雄"],
    ["hers", "代 她的"],
    ["herself", "代 他自己"],
    ["hi", "感叹 你好(比hello更随意些)"],
    ["hide", "动 隐藏"],
    ["high", "形 高的;副 高"],
    ["hill", "名 小山"],
    ["him", "代 他"],
    ["himself", "代 他自己"],
    ["his", "代 他的(形容词性或名词性物主代词)"],
    ["history", "名 历史"],
    ["hit", "动 打"],
    ["hobby", "名 爱好"],
    ["hold", "动 抓住，抱住"],
    ["hole", "名 洞"],
    ["holiday", "名 假期"],
    ["home", "名 家;副 到家"],
    ["homework", "名 家庭作业"],
    ["honest", "形 诚实的，老实的"],
    ["hope", "动 希望;名 希望"],
    ["horse", "名 马"],
    ["hospital", "名 医院"],
    ["hot", "形 热的;辣的"],
    ["hotel", "名 酒馆，旅馆，旅社"],
    ["hour", "名 小时"],
    ["house", "名 房子，房屋"],
    ["how", "副 怎样，如何"],
    ["however", "副 无论如何，不管怎样"],
    ["hug", "动 拥抱"],
    ["huge", "形 巨大的"],
    ["human", "名 人"],
    ["humorous", "形 幽默的"],
    ["hundred", "数 一百"],
    ["hunger", "名 饥饿"],
    ["hungry", "形 饥饿的"],
    ["hunt", "动 打猎，搜寻"],
    ["hurry", "动 急忙，赶快"],
    ["hurt", "动 (使)疼痛，受伤"],
    ["husband", "名 丈夫"],
    ["ice", "名 冰"],
    ["ice cream", "ˈīs-ˌkrēm", "[ˈaɪsˌkriːm]", "名 冰激淋"],
    ["idea", "名 主意"],
    ["if", "连 如果;是否"],
    ["ill", "形 生病的，不健康的"],
    ["important", "形 重要的"],
    ["in", "介 在……里面"],
    ["India", "名 印度"],
    ["Indian", "名 印度人，印度语;形 印度的，印度人的"],
    ["ink", "名 墨水，油墨"],
    ["inside", "介 在……里面"],
    ["interesting", "形 有趣的，有吸引力的"],
    ["Internet", "名 互联网"],
    ["into", "介 到……里面"],
    ["invent", "动 发明"],
    ["invention", "名 发明"],
    ["invite", "动 邀请"],
    ["island", "名 岛"],
    ["it", "代 它"],
    ["Italian", "名 意大利人，意大利语;形 意大利的，意大利人的"],
    ["Italy", "名 意大利"],
    ["its", "代 它的"],
    ["itself", "代 它自己"],
    ["jacket", "名 夹克衫，短上衣"],
    ["January", "名 一月"],
    ["Japan", "名 日本"],
    ["job", "名 工作"],
    ["join", "动 参加，加入"],
    ["joke", "名 玩笑，笑话"],
    ["juice", "名 果汁"],
    ["July", "名 七月"],
    ["jump", "动 跳，跳跃"],
    ["June", "名 六月"],
    ["just", "副 仅仅，恰好"],
    ["keep", "动 保留;养，饲养"],
    ["key", "名 钥匙"],
    ["keyboard", "名 键盘"],
    ["kick", "动 踢"],
    ["kid", "名 小孩"],
    ["kill", "动 杀死，弄死，导致死亡"],
    ["kilo", "名 千克"],
    ["kind", "形 友好的，宽容的;名 种类"],
    ["king", "名 国王"],
    ["kiss", "名 吻;动 吻，亲吻"],
    ["kitchen", "名 厨房"],
    ["kite", "名 风筝"],
    ["knee", "名 膝盖"],
    ["knife", "名 刀，小刀"],
    ["knock", "动 敲打，敲击"],
    ["know", "动 知道，认识"],
    ["knowledge", "名 知识"],
    ["lab", "名 实验室"],
    ["lady", "名 女士，小姐"],
    ["lake", "名 湖，湖泊"],
    ["land", "名 土地，陆地;动 着陆，降落"],
    ["language", "名 语言"],
    ["large", "形 巨大的，大的"],
    ["last", "形 最后的，上一个的"],
    ["late", "形 迟的，晚的"],
    ["later", "副 后来，随后"],
    ["laugh", "动 笑"],
    ["law", "名 法律"],
    ["lazy", "形 懒惰的"],
    ["lead", "动 带路，引路"],
    ["leaf", "名 叶子"],
    ["learn", "动 学习"],
    ["leave", "动 离开，丢弃;名 假，假期"],
    ["left", "形 左边的;名 左，左边;副 向左"],
    ["leg", "名 腿"],
    ["lemon", "名 柠檬"],
    ["lend", "动 借给，借出"],
    ["lesson", "名 课，教训"],
    ["let", "动 让"],
    ["letter", "名 字母，信"],
    ["library", "名 图书馆"],
    ["lie", "动 躺;说谎;名 谎言"],
    ["life", "名 人命，性命;生活"],
    ["lift", "动 举起，抬起;名 电梯"],
    ["light", "名 光，光线，灯;形 轻的"],
    ["like", "动 喜欢;介 像"],
    ["line", "名 线，排"],
    ["lion", "名 狮子"],
    ["lip", "名 唇"],
    ["list", "名 名单，目录，清单，一览表"],
    ["listen", "动 听，倾听"],
    ["little", "形 小的"],
    ["live", "动 住，居住"],
    ["lively", "形 精力充沛的，活跃热情的"],
    ["living", "形 活着的，活的"],
    ["lock", "动 锁上;名 锁"],
    ["London", "名 伦敦"],
    ["lonely", "形 孤独的，寂寞的"],
    ["long", "形 长的"],
    ["look", "动 看，观看"],
    ["lose", "动 丢失，输掉"],
    ["lot", "副 很，非常;名 全体"],
    ["loud", "形 大声的，响亮的"],
    ["love", "名 热爱，爱情;动 爱"],
    ["lovely", "形 可爱的"],
    ["low", "形 低的，矮的"],
    ["luck", "名 运气，好运"],
    ["lucky", "形 幸运的"],
    ["lunch", "名 午餐"],
    ["machine", "名 机器"],
    ["mad", "形 疯的；生气的"],
    ["madam", "名 夫人，女士"],
    ["magazine", "名 杂志"],
    ["mail", "名 邮件;动 邮寄"],
    ["make", "动 制造"],
    ["man", "名 男人；人，人类"],
    ["manager", "名 经理"],
    ["many", "代 许多的"],
    ["map", "名 地图"],
    ["March", "名 三月"],
    ["market", "名 市场，集市"],
    ["marry", "动 结婚，嫁，娶"],
    ["match", "名 比赛；火柴;动 相配"],
    ["maths", "名 数学"],
    ["matter", "动 要紧；事关紧要;名 事情；问题"],
    ["May", "名 五月"],
    ["may", "情态 可以"],
    ["maybe", "副 也许，大概，可能"],
    ["me", "代 (宾格)我"],
    ["meal", "名 饭，餐"],
    ["meat", "名 肉"],
    ["medicine", "名 药"],
    ["meet", "动 遇见，见面"],
    ["meeting", "名 会议，集会"],
    ["menu", "名 菜单"],
    ["merry", "形 欢乐的，开心的"],
    ["mess", "名 杂乱"],
    ["message", "名 消息，信息"],
    ["meter", "名 米"],
    ["middle", "名 中间;形 中间的"],
    ["mile", "名 英里"],
    ["milk", "名 牛奶"],
    ["million", "数 百万"],
    ["mind", "动 介意;名 思考能力，心思"],
    ["mine", "代 我的"],
    ["minute", "名 分，分钟"],
    ["mirror", "名 镜子"],
    ["Miss", "名 小姐(未婚女子)"],
    ["miss", "动 想念;错过，未赶上"],
    ["mistake", "名 错误"],
    ["mobile", "形 可移动的"],
    ["model", "名 模型"],
    ["modern", "形 现代的，时髦的"],
    ["Monday", "名 星期一"],
    ["money", "名 钱，钱币"],
    ["monitor", "名 班长"],
    ["monkey", "名 猴子"],
    ["month", "名 月，月份"],
    ["moon", "名 月亮"],
    ["more", "代 更多;副 更"],
    ["morning", "名 早晨，上午"],
    ["mother", "名 母亲"],
    ["mountain", "名 山，山脉"],
    ["mouse", "名 老鼠;鼠标"],
    ["mouth", "名 嘴"],
    ["move", "动 移动，前进"],
    ["movie", "名 电影"],
    ["Mr", "名 先生"],
    ["Mrs", "名 太太(已婚妇女)"],
    ["Ms", "名 女士(不明婚否)"],
    ["much", "代 大量的，许多的;副 非常，更加"],
    ["mud", "名 泥，泥浆"],
    ["mum", "名 妈妈(美式英语mom)"],
    ["museum", "名 博物馆"],
    ["mushroom", "名 蘑菇"],
    ["music", "名 音乐，乐曲"],
    ["musician", "名 音乐家，作曲家"],
    ["must", "情态 必须"],
    ["mutton", "名 羊肉"],
    ["my", "代 我的"],
    ["myself", "代 我自己"],
    ["name", "名 名字，名称;动 给…取名字"],
    ["nation", "名 民族，国家"],
    ["national", "形 国家的，民族的"],
    ["nature", "名 大自然，自然界"],
    ["near", "介 在…附近;形 距离近，不远"],
    ["necessary", "形 必要的"],
    ["neck", "名 脖子"],
    ["need", "动 需要;名 需要，必须"],
    ["neighbour", "名 邻居"],
    ["never", "副 从不；绝不"],
    ["new", "形 新的，新近推出的"],
    ["news", "名 新闻，消息"],
    ["newspaper", "名 报纸"],
    ["next", "形 下一个的"],
    ["nice", "形 好心的，友好的，令人愉快的"],
    ["night", "名 晚上"],
    ["nine", "数 九"],
    ["nineteen", "数 十九"],
    ["ninety", "数 九十"],
    ["ninth", "数 第九"],
    ["no", "感叹 不"],
    ["nobody", "代 没有人"],
    ["noise", "名 声音，响声，噪音"],
    ["noisy", "形 吵闹的"],
    ["noodle", "名 面条"],
    ["noon", "名 中午，正午"],
    ["nor", "连 也不(与neither连用)"],
    ["north", "名 北方;形 北方的;副 向北，朝北"],
    ["northern", "形 北方的，北部的"],
    ["nose", "名 鼻子"],
    ["not", "副 不，没有"],
    ["note", "名 笔记"],
    ["notebook", "名 笔记本"],
    ["nothing", "代 没有什么，没有一件东西"],
    ["November", "名 十一月"],
    ["now", "副 现在"],
    ["number", "名 数，数字;编号"],
    ["nurse", "名 护士，女保育员"],
    ["ocean", "名 海洋"],
    ["o'clock", "ə-ˈkläk", "[əˈklɒk]", "副 ……点钟"],
    ["October", "名 十月"],
    ["of", "介 属于;关于;出身于(某背景)"],
    ["off", "介 从(某处)落下；离开"],
    ["office", "名 办公室"],
    ["often", "副 经常，常常"],
    ["OK", "感叹 好，行，对，好了，对了"],
    ["old", "形 年老的；(多少)岁；旧的"],
    ["on", "介 在……上面;副 向前(移动)；穿着，带着；(表持续性)"],
    ["one", "数 一;代 一个"],
    ["only", "副 只，仅仅，只有;形 唯一的，仅有的"],
    ["open", "动 开，打开;形 敞开的，开放的"],
    ["or", "连 或者，还是;否则"],
    ["orange", "名 橘子，橙子，橘黄色;形 橘黄色的"],
    ["order", "动 命令，吩咐;名 命令，吩咐；顺序;点菜"],
    ["other", "形 其他的;代 另一个"],
    ["our", "代 我们的"],
    ["ours", "代 我们的"],
    ["ourselves", "代 我们自己"],
    ["out", "副 不在家；出去；远离"],
    ["outside", "介 在……外面;副 在外面"],
    ["over", "介 在……上面;副 落下；翻转；穿过"],
    ["ox", "名 牛"],
    ["page", "名 页"],
    ["paint", "动 用颜料画；用……涂;名 油漆"],
    ["pair", "名 一对，一双"],
    ["panda", "名 熊猫"],
    ["paper", "名 纸，纸张"],
    ["pardon", "动 原谅"],
    ["parent", "名 父亲或母亲"],
    ["park", "名 公园;动 停车"],
    ["part", "名 部分"],
    ["party", "名 聚会；政党，党派"],
    ["pass", "动 走过，通过;传递"],
    ["past", "介 (指时间)晚于，在……之后;名 过去"],
    ["pay", "动 付钱;名 工资，薪水"],
    ["PE", "名 体育(physical education)"],
    ["peace", "名 和平"],
    ["pear", "名 梨"],
    ["pen", "名 钢笔"],
    ["pencil", "名 铅笔"],
    ["people", "名 人，人们;民族"],
    ["person", "名 人"],
    ["pet", "名 宠物"],
    ["phone", "名 电话"],
    ["photo", "名 照片photograph"],
    ["physics", "名 物理学"],
    ["piano", "名 钢琴"],
    ["pick", "动 采，摘；挑选"],
    ["picnic", "名 野餐"],
    ["picture", "名 图画，照片"],
    ["pie", "名 果馅派"],
    ["piece", "名 片；块；段"],
    ["pig", "名 猪"],
    ["pillow", "名 枕头"],
    ["pilot", "名 飞行员"],
    ["pink", "形 粉红色的;名 粉红色"],
    ["place", "名 地方"],
    ["plan", "名 计划;动 计划"],
    ["plane", "名 飞机"],
    ["plant", "名 植物;动 种植"],
    ["plate", "名 盘子，碟子"],
    ["play", "动 玩耍"],
    ["playground", "名 操场"],
    ["please", "感叹 请，请问"],
    ["pleasure", "名 愉快，高兴"],
    ["plenty", "名 富裕，充足"],
    ["p.m.", "ˌpēˈem", "[ˌpiː ˈem]", "名 下午"],
    ["poem", "名 诗"],
    ["police", "名 警察；警方"],
    ["polite", "形 有礼貌的"],
    ["pollution", "名 污染；污染物"],
    ["pool", "名 池子，水塘"],
    ["poor", "形 贫困的，贫穷的"],
    ["popular", "形 流行的，受欢迎的"],
    ["population", "名 人口"],
    ["pork", "名 猪肉"],
    ["possible", "形 可能的"],
    ["post", "名 邮件;动 邮寄"],
    ["postman", "名 邮递员"],
    ["post office", "", "", "名 邮局"],
    ["potato", "名 马铃薯，土豆"],
    ["practice", "名 练习，实践;动 练习，训练"],
    ["present", "名 礼物;形 在场的，出席的"],
    ["president", "名 总统，总裁，董事长"],
    ["pretty", "形 漂亮的"],
    ["price", "名 价格"],
    ["pride", "名 骄傲，自豪"],
    ["print", "动 打印，印刷"],
    ["prize", "名 奖，奖品"],
    ["problem", "名 问题"],
    ["program", "名 节目"],
    ["progress", "名 进步"],
    ["protect", "动 保护"],
    ["proud", "形 骄傲的"],
    ["public", "名 公众"],
    ["pull", "动 拉"],
    ["pupil", "名 小学生"],
    ["purple", "形 紫色的"],
    ["purse", "名 钱包"],
    ["push", "动 推，推动"],
    ["put", "动 放"],
    ["quarter", "名 四分之一；一刻钟"],
    ["queen", "名 女王，王后"],
    ["question", "名 问题"],
    ["quick", "形 快的"],
    ["quiet", "形 安静的"],
    ["quite", "副 完全地，十分地"],
    ["rabbit", "名 兔子"],
    ["race", "名 比赛"],
    ["radio", "名 无线电广播，收音机"],
    ["railway", "名 铁路，铁道"],
    ["rain", "动 下雨;名 雨，雨水"],
    ["rainy", "形 多雨的，阴雨的"],
    ["raise", "动 举起；增加；提及；筹集"],
    ["read", "动 读，阅读"],
    ["ready", "形 准备好"],
    ["real", "形 真实的，真的"],
    ["really", "副 真正地，真实地，事实上，确实"],
    ["reason", "名 原因，理由"],
    ["receive", "动 收到，接到"],
    ["red", "名 红色;形 红色的"],
    ["remember", "动 记得，想起"],
    ["rent", "动 租借"],
    ["repair", "动 修理"],
    ["report", "动 报道，汇报"],
    ["rest", "名 休息"],
    ["restaurant", "名 餐馆，餐厅"],
    ["result", "名 结果"],
    ["return", "动 回来，归还"],
    ["rice", "名 稻，稻米，大米"],
    ["rich", "形 富裕的"],
    ["ride", "动 骑"],
    ["right", "形 右边的；正确的"],
    ["ring", "动 给……打电话；发出铃声;名 戒指；铃声，钟声"],
    ["rise", "动 升起"],
    ["river", "名 河"],
    ["road", "名 公路"],
    ["robot", "名 机器人"],
    ["room", "名 房间;空间"],
    ["rose", "名 玫瑰"],
    ["round", "形 圆形的;介 围绕"],
    ["row", "名 排"],
    ["rubbish", "名 垃圾"],
    ["rude", "形 粗鲁的，无礼的"],
    ["ruler", "名 尺子"],
    ["run", "动 跑"],
    ["sad", "形 悲哀的，难过的"],
    ["safe", "形 安全的"],
    ["salad", "名 沙拉"],
    ["sale", "名 特价销售"],
    ["salt", "名 盐"],
    ["same", "形 同样的，相同的"],
    ["sand", "名 沙，沙滩"],
    ["sandwich", "名 三明治"],
    ["Saturday", "名 星期六"],
    ["save", "动 救，挽救"],
    ["say", "动 说"],
    ["scarf", "名 围巾"],
    ["school", "名 学校"],
    ["schoolbag", "名 书包"],
    ["science", "名 科学"],
    ["scissors", "名 (仅有复数形式)剪刀"],
    ["sea", "名 海，海洋"],
    ["season", "名 季节"],
    ["seat", "名 座位"],
    ["second", "数 第二;名 秒"],
    ["secret", "名 秘密"],
    ["secretary", "名 秘书"],
    ["see", "动 看见，看到；理解"],
    ["sell", "动 卖，销售"],
    ["send", "动 发送"],
    ["September", "名 九月"],
    ["seven", "数 七"],
    ["seventeen", "数 十七"],
    ["seventh", "数 第七"],
    ["seventy", "数 七十"],
    ["shall", "情态 将要，将会"],
    ["share", "动 分享"],
    ["she", "代 她(主格)"],
    ["sheep", "名 绵羊(单复同形)"],
    ["ship", "名 轮船"],
    ["shirt", "名 衬衫(男士)"],
    ["shoe", "名 鞋"],
    ["shop", "名 商店"],
    ["short", "形 短的；矮的"],
    ["shorts", "名 短裤"],
    ["should", "情态 应该"],
    ["shoulder", "名 肩膀"],
    ["shout", "动 呼喊，喊叫"],
    ["show", "动 指引，给……看"],
    ["shy", "形 害羞的"],
    ["sick", "形 生病的"],
    ["silent", "形 沉默的；寂静的"],
    ["sing", "动 唱，唱歌"],
    ["sir", "名 先生(对madam)"],
    ["sister", "名 姐，妹"],
    ["sit", "动 坐"],
    ["six", "数 六"],
    ["sixteen", "数 十六"],
    ["sixth", "数 第六"],
    ["sixty", "数 六十"],
    ["size", "名 尺码，号"],
    ["skate", "动 滑冰"],
    ["ski", "动 滑雪"],
    ["skirt", "名 裙子"],
    ["sky", "名 天；天空"],
    ["sleep", "动 睡觉"],
    ["slow", "形 慢的"],
    ["small", "形 小的"],
    ["smart", "形 聪明的，伶俐的"],
    ["smile", "动 微笑;名 微笑，笑容"],
    ["smoke", "名 烟;动 抽烟"],
    ["snake", "名 蛇"],
    ["snow", "名 雪;动 下雪"],
    ["snowy", "形 多雪的"],
    ["so", "副 这么；很;连 所以，因此"],
    ["sock", "名 短袜"],
    ["sofa", "名 长沙发"],
    ["some", "代 一些"],
    ["sometimes", "副 有时"],
    ["son", "名 儿子"],
    ["song", "名 歌，歌曲"],
    ["sorry", "形 难过，同情;感叹 对不起"],
    ["sound", "动 听起来;名 声音"],
    ["soup", "名 汤"],
    ["space", "名 太空"],
    ["speak", "动 讲"],
    ["special", "形 特殊的"],
    ["spell", "动 拼写"],
    ["spend", "动 花费(时间，金钱)；度过"],
    ["sport", "动 体育运动"],
    ["spring", "名 春天，春季;泉，温泉"],
    ["stamp", "名 邮票"],
    ["stand", "动 站立，站起来"],
    ["star", "名 星星"],
    ["start", "动 开始，着手，出发"],
    ["station", "名 火车站；公共汽车站"],
    ["stay", "动 停留，待"],
    ["still", "副 仍然，还"],
    ["stomach", "名 胃，肚子"],
    ["stone", "名 石头"],
    ["stop", "动 停止;名 车站"],
    ["store", "名 百货商店"],
    ["storm", "名 风暴，暴风雨"],
    ["story", "名 故事;楼层"],
    ["straight", "副 笔直地"],
    ["strawberry", "名 草莓"],
    ["street", "名 街道"],
    ["strict", "形 严格的"],
    ["strong", "形 强壮的"],
    ["student", "名 学生"],
    ["study", "动 学习，研究;名 书房"],
    ["subway", "名 地铁"],
    ["subject", "名 科学；科目"],
    ["success", "名 成功"],
    ["such", "代 如此的，这样的"],
    ["summer", "名 夏天，夏季"],
    ["sun", "名 太阳，阳光"],
    ["Sunday", "名 星期日"],
    ["sunny", "形 阳光充足的"],
    ["supermarket", "名 超市"],
    ["supper", "名 晚饭，晚餐"],
    ["sure", "形 肯定，确信"],
    ["surprise", "名 惊奇，惊讶"],
    ["sweater", "名 毛衣"],
    ["sweep", "动 打扫，扫除"],
    ["sweet", "形 甜的，甜味的，温柔的"],
    ["swim", "动 游泳"],
    ["table", "名 桌子"],
    ["tail", "名 尾巴"],
    ["take", "动 拿走；携带；花费(时间)"],
    ["talk", "动 说话，谈话"],
    ["tall", "形 高的"],
    ["taste", "名 味道;动 尝起来"],
    ["taxi", "名 出租汽车"],
    ["tea", "名 茶，茶叶"],
    ["teach", "动 教"],
    ["teacher", "名 老师"],
    ["telephone", "名 电话"],
    ["tell", "动 告诉"],
    ["temperature", "名 温度"],
    ["ten", "数 十"],
    ["tenth", "数 第十"],
    ["term", "名 学期"],
    ["terrible", "形 恐怖的，可怕的"],
    ["test", "名 测验"],
    ["text", "名 课本，课文"],
    ["than", "连 比"],
    ["thank", "动 感谢"],
    ["that", "代 那，那个"],
    ["the", "冠 这(那)个，这(那)些"],
    ["their", "代 她(他，它)们的"],
    ["them", "代 (宾格)他(她，它)们"],
    ["themselves", "代 她(他，它)们自己"],
    ["then", "副 当时，那时，然后"],
    ["there", "副 在那里，往那里"],
    ["these", "代 这些"],
    ["they", "代 她(他，它)们"],
    ["thick", "形 厚的;浓的"],
    ["thin", "形 瘦的，薄的"],
    ["thing", "名 事情，东西"],
    ["think", "动 思考，想，认为，考虑"],
    ["third", "数 第三"],
    ["thirsty", "形 口渴的;渴望的，渴求得"],
    ["thirteen", "数 十三"],
    ["thirty", "数 三十"],
    ["this", "代 这个，这"],
    ["those", "代 那些"],
    ["thought", "动 想(think的过去式)"],
    ["thousand", "数 千，一千"],
    ["three", "数 三"],
    ["through", "介 穿过"],
    ["Thursday", "名 星期四"],
    ["ticket", "名 票，券"],
    ["tidy", "形 整洁的，整齐的"],
    ["tiger", "名 老虎"],
    ["time", "名 时间，次数"],
    ["tired", "形 疲倦的"],
    ["to", "介 向，朝，往"],
    ["today", "名 今天;副 在今天，在今日"],
    ["together", "副 在一起"],
    ["toilet", "名 厕所"],
    ["tomato", "名 西红柿，番茄"],
    ["tomorrow", "名 明天"],
    ["tonight", "副 今晚"],
    ["too", "副 也；太"],
    ["tooth", "名 牙，牙齿"],
    ["tour", "名 旅游，旅行"],
    ["town", "名 镇，城镇"],
    ["toy", "名 玩具"],
    ["traffic", "名 交通"],
    ["train", "名 火车"],
    ["travel", "动 旅行;传播"],
    ["tree", "名 树"],
    ["trip", "名 旅行"],
    ["trousers", "名 裤子"],
    ["truck", "名 卡车"],
    ["try", "动 试图，努力"],
    ["true", "形 真的，真实的"],
    ["Tuesday", "名 星期二"],
    ["turn", "动 旋转，转动"],
    ["twelfth", "数 第十二"],
    ["twelve", "数 十二"],
    ["twentieth", "数 第二十"],
    ["twenty", "数 二十"],
    ["twice", "副 两次"],
    ["twin", "名 双胞胎中的一人"],
    ["two", "数 二"],
    ["ugly", "形 丑陋的，难看的"],
    ["umbrella", "名 伞；雨伞"],
    ["uncle", "名 叔，伯，舅，姑父，姨父"],
    ["under", "介 在……下面"],
    ["university", "名 大学"],
    ["until", "介 直到……为止"],
    ["up", "副 向上"],
    ["us", "代 (宾格)我们"],
    ["use", "动 利用，使用"],
    ["usual", "形 通常的，平常的"],
    ["usually", "副 通常地"],
    ["vacation", "名 假期"],
    ["vegetable", "名 蔬菜"],
    ["very", "副 很，非常"],
    ["video", "名 视频，录像"],
    ["village", "名 村庄，乡村"],
    ["violin", "名 小提琴"],
    ["visit", "动 参观，拜访，访问"],
    ["volleyball", "名 排球"],
    ["voice", "名 (人的)嗓音，声音"],
    ["wait", "动 等，等待"],
    ["walk", "动 行走，步行"],
    ["wall", "名 墙"],
    ["wallet", "名 皮夹，钱夹"],
    ["want", "动 想要"],
    ["war", "名 战争"],
    ["warm", "形 暖和的，温暖的"],
    ["wash", "动 洗"],
    ["waste", "动 浪费;名 浪费；废物"],
    ["watch", "动 观看;名 手表"],
    ["water", "名 水"],
    ["watermelon", "名 西瓜"],
    ["way", "名 道路，路线"],
    ["we", "代 (主格)我们"],
    ["weak", "形 弱的，虚弱的"],
    ["wear", "动 穿，戴"],
    ["weather", "名 天气"],
    ["Wednesday", "名 星期三"],
    ["week", "名 周，星期"],
    ["weekday", "名 工作日"],
    ["weekend", "名 周末"],
    ["welcome", "名 欢迎;动 欢迎;形 受欢迎的，受款待的"],
    ["well", "副 好，令人满意地;形 健康的，身体好的;名 井"],
    ["west", "名 西，西方"],
    ["wet", "形 湿的"],
    ["what", "代 什么"],
    ["when", "副 什么时候;连 在……时候"],
    ["where", "副 在哪里"],
    ["which", "代 哪一个，哪一些"],
    ["white", "形 白色的;名 白色"],
    ["who", "代 谁"],
    ["whom", "代 谁(who的宾格形式)"],
    ["whose", "代 谁的"],
    ["why", "副 为什么"],
    ["wide", "形 宽的"],
    ["wife", "名 妻子"],
    ["will", "情态 将要"],
    ["win", "动 获胜"],
    ["wind", "名 风"],
    ["window", "名 窗户"],
    ["windy", "形 多风的"],
    ["wine", "名 酒"],
    ["winter", "名 冬天，冬季"],
    ["wish", "名 希望;动 希望"],
    ["with", "介 同，和"],
    ["wolf", "名 狼"],
    ["woman", "名 妇女"],
    ["wonderful", "形 精彩的，绝妙的，使人愉快的"],
    ["wood", "名 木，木头"],
    ["word", "名 词，单词；说的话"],
    ["work", "名 工作;动 工作；劳动"],
    ["worker", "名 工人"],
    ["world", "名 世界"],
    ["worry", "动 担心"],
    ["would", "情态 将，将会"],
    ["write", "动 写，写字"],
    ["wrong", "形 错误的，不对的"],
    ["X-ray", "ˈeks-ˌrā", "[ˈeksˌreɪ]", "名 X射线，X光"],
    ["year", "名 年"],
    ["yellow", "名 黄色;形 黄色的"],
    ["yes", "感叹 是，对"],
    ["yesterday", "副 在昨天;名 昨天"],
    ["you", "代 你，你们"],
    ["young", "形 年轻的"],
    ["your", "代 你的，你们的"],
    ["yours", "代 你的，你们的(名词性物主代词)"],
    ["zebra", "名 斑马"],
    ["zero", "数 零"],
    ["zoo", "名 动物园"],
]