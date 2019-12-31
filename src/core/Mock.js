
const __idMaker = function __idMaker() {
  let id = 1;
  __idMaker.cleanId = function cleanId() {
    id = 1;
  };
  return function idPlus() {
    return id++;
  };
};

const __getId = __idMaker();

const __arrayMockAction = function __arrayMockAction(obj, props, num) {
  let i = 0;
  __defineProperty(obj, 'length', num);
  while (num > 0) {
    obj[i] = __propsController(props, {});
    i++;
    num--;
  }
  Object.setPrototypeOf(Object.getPrototypeOf(obj), Object.create(Array.prototype));
};

const __propsController = function __propsController(props, host) {
  for (const i in props) {
    if (Object.prototype.hasOwnProperty.call(props, i)) {
      const type = typeof props[i];
      const value = __getValueByType(type, props[i]);
      if (value !== false) host[i] = value;
    }
  }
  return host;
};

const __isObject = function __isObject(arg) {
  return typeof arg === 'object' && arg !== null && !(arg instanceof Array);
};

const __defineProperty = function __defineProperty(obj, prop, value) {
  const legal = typeof prop === 'string' && typeof value !== 'undefined';
  if (legal) Object.defineProperty(obj, prop, { value, writable: true, configurable: true });
};

const __getValueByType = function __getValueByType(type, value) {
  switch (type) {
    case 'number':
      return __numberAction(value);
    case 'string':
      return __stringAction(value);
    case 'object':
      return __objectAction(value);
    default:
      return false;
  }
};

const __objectAction = function __objectAction(value) {
  if (__isObject(value)) {
    return __propsController(value, value);
  } if (value instanceof Array) {
    return __random(value);
  }
  return false;
};

const __stringAction = function __stringAction(type) {
  const strType = String(type).toLowerCase();
  const img = ['http://b.zol-img.com.cn/sjbizhi/images/2/750x530/1352364510939.jpg', 'http://www.chabeichong.com/images/2014/12/20-02525481.jpg', 'http://y1.ifengimg.com/cmpp/2015/08/09/08/bb59e286-8dca-4388-bc96-5ce0de7b95cd_size45_w600_h444.jpg', 'http://img1.juimg.com/180329/330819-1P329100P550.jpg', 'https://www.zhifure.com/upload/images/2017/7/1717461017.jpg'];
  switch (strType) {
    case 'address':
      return `${__getRandomWords(2)}省 ${__getRandomWords(2)}市 ${__getRandomWords(2)}区 ${__getRandomWords(3)}街道`;
    case 'img':
      return __random(img);
    case 'id':
      return __getId();
    default:
      return __numberAction(type.length);
  }
};

const __getLegalNum = function __getLegalNum(num) {
  return typeof num === 'number' ? Math.floor(num < 1 ? 1 : num) : 0;
};

const __numberAction = function __numberAction(num) {
  return __getRandomWords(__getLegalNum(num));
};

const __random = function __random(arr) {
  return arr instanceof Array ? arr[Math.floor(Math.random() * arr.length)] : null;
};

const __getRandomWords = function __getRandomWords(num) {
  const start = '%u';
  const words = '90A3,4E00,5E74,6D41,661F,8DDF,968F,6708,7259,90A3,4E00,5E74,5306,5306,8BC9,8BF4,653E,4E0B,90A3,4E00,5E74,5FC3,601D,5F00,59CB,53D1,82BD,90A3,4E00,5E74,662F,7F8E,68A6,7684,5F00,59CB,90A3,4E00,5E74,662F,9752,6625,7684,771F,5B9E,90A3,4E00,5E74,7528,6C57,6C34,6325,6D12,9752,6625,7528,70ED,8840,94F8,5C31,56DE,5FC6,8FC7,4E86,90A3,4E00,5E74,4E16,4E0A,518D,65E0,6B64,671F,4EE5,540E,90A3,4E9B,5E74,53EA,6709,94ED,8BB0,521D,8BC6,90A3,4E00,5E74,516B,6708,76DB,590F,90A3,5929,6668,8D77,5C71,8C37,95F4,7684,8584,96FE,5728,6811,6797,95F4,5F25,6F2B,5C31,5982,540C,6211,66FE,7ECF,5931,53BB,7684,516D,5E74,9752,6625,4E00,6837,5728,6211,8111,6D77,91CC,4E00,4EF6,4EF6,7684,88AB,65F6,95F4,51B2,5237,62B9,53BB,518D,4E5F,56DE,4E0D,5230,90A3,5E74,90A3,6708,90A3,5929,7684,4ECE,524D,90A3,4E00,5E74,6211,4E0A,521D,4E00,5E26,7740,5C0F,5B66,7684,9752,6DA9,6000,7740,5BF9,521D,4E2D,7684,5411,5F80,6211,6765,5230,8FD9,6240,4E2D,5B66,6211,662F,4E00,4E2A,4E0D,5584,8A00,8F9E,7684,4EBA,52A0,4E0A,5BF9,521D,4E2D,7684,964C,751F,6050,60E7,5BB3,6015,4E0D,5B89,5360,636E,4E86,6211,7684,5FC3,7075,6709,65F6,5019,6211,4F1A,89C9,5F97,81EA,5DF1,7ADF,65E0,4EBA,503E,8BC9,6211,6709,65F6,5019,4E5F,60F3,8FC7,628A,81EA,5DF1,4F2A,88C5,8D77,6765,7ED3,679C,6BCF,4E2A,4EBA,90FD,662F,6709,5FC3,7684,8001,5E08,548C,540C,5B66,4EEC,5BF9,6211,65E0,5FAE,4E0D,81F3,7684,5173,5FC3,8BA9,6211,7684,5FC3,4E00,70B9,70B9,7684,89E3,51BB,56DE,6696,800C,6211,4E5F,9010,6E10,53D8,5F97,5F00,6717,4E50,89C2,73B0,5728,60F3,60F3,5C31,89C9,5F97,90A3,65F6,7684,81EA,5DF1,6709,4E9B,65E0,7406,53EF,80FD,662F,6211,592A,8FC7,5E7C,7A1A,6240,4EE5,5728,65E0,5F62,4E2D,4F24,4E86,5F88,591A,4EBA,7684,5FC3,6211,66FE,7ECF,662F,81EA,4EE5,4E3A,662F,7684,4EE5,4E3A,81EA,5DF1,4EC0,4E48,90FD,6709,4EC0,4E48,90FD,4E0D,7F3A,4EC0,4E48,90FD,4E0D,5DEE,53EF,662F,77E5,9053,6709,4E00,4E9B,4E8B,53D1,751F,4E86,6211,624D,660E,767D,6BCF,4E2A,4EBA,5728,6210,957F,4E4B,524D,90FD,662F,81EA,6211,611F,89C9,826F,597D,7684,540E,6765,6211,9009,62E9,4E86,6C89,9ED8,6211,6536,8D77,950B,8292,6211,4E0D,5728,5BF9,522B,4EBA,8FC7,4E8E,5201,96BE,56E0,4E3A,4ECE,90A3,65F6,8D77,6211,4F3C,4E4E,660E,767D,4E86,5C06,5FC3,6BD4,5FC3,6BCF,4E2A,4EBA,90FD,662F,4E0D,540C,7684,4E2A,4F53,90FD,6709,4E0D,540C,7684,672C,8D28,548C,5929,5206,90A3,4E00,5E74,8BA9,6211,660E,767D,4E86,4EBA,751F,4E0D,4E00,5B9A,90FD,662F,4E00,5E06,98CE,987A,7684,6709,65F6,5019,4F1A,7ECF,5386,4E00,4E9B,632B,6298,800C,632B,6298,4E4B,540E,662F,96E8,8FC7,5929,6674,90A3,7247,539A,91CD,7684,4E4C,4E91,4E0A,603B,6709,4E00,7247,7EDA,4E3D,7684,6674,7A7A,719F,8BC6,90A3,4E00,5E74,6E10,6E10,7684,6211,878D,5165,56DB,73ED,8FD9,4E2A,5927,96C6,4F53,4E2D,66FE,7ECF,8BF4,8FC7,6BCF,4E2A,4EBA,90FD,662F,4E0D,540C,7684,82B1,56E0,673A,7F18,5DE7,5408,6295,751F,4E16,95F4,8FD9,53E5,8BDD,4E0D,514D,7684,6709,4E9B,7EDD,5BF9,53EF,662F,6211,76F8,4FE1,6BCF,4E2A,4EBA,90FD,662F,6709,7075,6027,7684,81F3,5C11,662F,6709,5FC3,7684,6211,603B,662F,5728,4E4B,524D,592A,8FC7,4E8E,56A3,5F20,800C,5FFD,89C6,4E86,522B,4EBA,5BF9,6211,7684,597D,5374,53C8,5FD8,4E86,5F53,4F60,5BF9,522B,4EBA,597D,7684,65F6,5019,522B,4EBA,4E5F,4F1A,5BF9,4F60,597D,826F,8A00,4E00,53E5,4E09,51AC,6696,5728,8FD9,4E2A,96C6,4F53,4E2D,867D,8BF4,6CA1,6709,4EC0,4E48,60CA,5929,52A8,5730,7684,5927,4E8B,66F4,6CA1,6709,4EC0,4E48,4E30,529F,4F1F,4E1A,4F46,662F,81F3,5C11,5728,8FD9,91CC,6211,6536,83B7,4E86,8BB8,8BB8,591A,591A,4E0D,540C,7684,611F,52A8,6211,4E5F,5B66,4F1A,4E86,6362,4F4D,601D,8003,66FE,7ECF,6211,4E5F,52A8,6447,8FC7,542C,8FC7,8BB8,591A,7684,98CE,8A00,98CE,8BED,603B,662F,4EE5,4E3A,4E00,4E9B,4EBA,574F,7684,5F7B,5E95,4E5F,603B,662F,4EE5,4E3A,4E00,4E9B,4EBA,597D,7684,4E0D,53EF,7406,55BB,6211,770B,4E0D,6E05,4EC0,4E48,662F,62AB,7740,7F8A,76AE,7684,72FC,4EE5,4E3A,5BF9,4F60,7684,597D,662F,4E00,751F,4E00,4E16,7684,53EF,662F,90A3,4E00,5E74,7ECF,8FC7,5C81,6708,7684,78E8,783A,65F6,95F4,7684,6D17,6DA4,8BA9,6211,770B,6E05,4E86,4EBA,7684,672C,6027,867D,7136,6CA1,6709,5F7B,5E95,4F46,4E5F,4E0D,7B97,6D45,8584,6709,7684,8774,8776,534E,4E3D,7684,5916,8868,4E0B,662F,6076,6BD2,7684,7075,9B42,800C,6709,7684,98DE,86FE,662F,4E11,964B,7684,8EAF,4F53,4E0B,5374,6709,4E00,9897,5584,826F,7684,5FC3,90A3,4E00,5E74,544A,8BC9,6211,6BCF,4E2A,4EBA,90FD,662F,4E0D,540C,7684,70DF,706B,90FD,4F1A,72AF,4E0D,540C,7A0B,5EA6,7684,9519,4EBA,65E0,5B8C,4EBA,770B,6BCF,4E00,4E2A,4EBA,90FD,4E0D,8981,7528,7EDD,5BF9,773C,5149,5982,679C,6362,53E6,4E00,4E2A,89D2,5EA6,770B,5C31,4F1A,53D1,73B0,4ED6,522B,6837,7684,95EA,5149,65E2,7136,5929,751F,6211,624D,5FC5,6709,7528,90A3,5C31,8BA9,6211,4EEC,5728,4EBA,95F4,8FD9,4E2A,5927,5BB6,5EAD,91CC,4E92,76F8,6E29,6696,5F7C,6B64,4F9D,9760,8FD9,4E00,5E74,8BA9,6211,5BF9,8FD9,4E2A,73ED,7EA7,8FD9,4E2A,96C6,4F53,8FD9,4E9B,540C,5B66,6E10,6E10,7684,719F,6089,4E86,518D,8BC6,8FD9,4E00,5E74,8FD9,4E00,5E74,8D70,8D70,505C,505C,4E5F,770B,8FC7,4E86,8BB8,591A,98CE,666F,4E5F,548C,6709,7684,4EBA,76F8,89C1,6068,665A,9000,53BB,4E86,9752,6DA9,7684,6211,4EEC,8FCE,6765,7684,662F,9752,6625,671F,7684,53DB,9006,8FD9,4E00,5E74,662F,5B66,4E60,662F,751F,6D3B,662F,5386,5C3D,5343,5E06,540E,7684,6E29,5B58,662F,5386,8FC7,98CE,96E8,7684,6696,9633,6211,89C9,5F97,8FD9,4E00,5E74,6211,771F,7684,5F88,5E78,798F,81F3,5C11,5728,5B66,6821,8FC7,7684,5145,5B9E,53C8,4E0D,4E4F,8DA3,5473,603B,6709,4E00,4E9B,4EBA,5728,6211,4EEC,5931,843D,751A,81F3,662F,843D,5BDE,7684,65F6,5019,7ED9,6211,4EEC,5FAE,7B11,8001,5E08,4E5F,4ECE,6CA1,5BF9,6211,4EEC,5931,53BB,4FE1,5FC3,751A,81F3,5728,6211,4EEC,73ED,90FD,6CA1,6709,4E00,4E9B,6B63,80FD,91CF,7684,65F6,5019,8001,5E08,4F9D,65E7,9ED8,9ED8,65E0,95FB,7684,6559,8BFE,4E09,5C3A,8BB2,53F0,94F8,5C31,7684,662F,6211,4EEC,7684,8F89,714C,53EF,901D,53BB,7684,5374,662F,4ED6,4EEC,7684,9752,6625,8BF4,5B9E,8BDD,8FD9,4E00,5E74,786E,5B9E,5BF9,4E0D,8D77,8001,5E08,4F46,662F,8001,5E08,5374,7ED9,6211,4EEC,6562,62FC,640F,9752,6625,65E0,6094,7684,9F13,52B1,6765,56DB,73ED,8FD9,4E2A,5927,96C6,4F53,6211,4E0D,540E,6094,613F,6211,4EEC,90FD,80FD,5728,8FD9,4E2A,5927,7194,7089,4E2D,627E,56DE,672C,771F,7684,81EA,5DF1,5FD8,4E0D,4E86,62D4,6CB3,6BD4,8D5B,4E2D,540C,5B66,4EEC,6325,6C57,5982,96E8,5374,59CB,7EC8,575A,5B88,4E0D,5F03,5FD8,4E0D,4E86,6625,5B63,8FD0,52A8,4F1A,91CC,540C,5B66,4EEC,5927,6C57,6DCB,6F13,5374,59CB,7EC8,4E0D,79BB,4E0D,5F03,5E0C,671B,6211,4EEC,4EE5,540E,90FD,6709,4E00,84D1,70DF,96E8,4EFB,5E73,751F,7684,8C6A,8FC8,90FD,6709,91C7,83CA,4E1C,7BF1,4E0B,60A0,7136,89C1,5357,5C71,7684,95F2,9002,90FD,6709,5C0F,821F,4ECE,6B64,901D,6C5F,6D77,5BC4,5E73,751F,7684,6C14,6982,6700,91CD,8981,7684,662F,4E0D,8981,5FD8,8BB0,5728,8FD9,4E2A,57CE,5E02,7684,8FD9,4E2A,89D2,843D,6709,90A3,4E48,4E00,7FA4,4EBA,503C,5F97,4F60,6302,5FF5,5C3D,7BA1,6211,4EEC,4ECE,90A3,5929,5F00,59CB,5C31,672A,66FE,8C0B,9762,5C3D,7BA1,6211,4EEC,4ECE,90A3,6B21,5206,522B,5C31,4E0D,518D,76F8,89C1,4F46,662F,6211,4EEC,7684,5FC3,4F9D,65E7,5C06,5F7C,6B64,7D27,7D27,7275,8FDE,672A,66FE,95F4,65AD,5C31,8DB3,591F,5C81,6708,8C31,5199,7ED9,6211,4EEC,7684,662F,4E00,66F2,7EC6,6C34,957F,6D41,7684,8BD7,6211,4EEC,8981,505A,7684,662F,5728,56DB,73ED,8FD9,4E2A,5927,96C6,4F53,91CC,7528,8BD7,6B4C,88C5,70B9,65F6,5149,7528,9752,6625,7167,6599,5E74,534E,90A3,4E00,5E74,518D,6B21,6DF1,6DF1,5730,660E,767D,4E86,6BCF,4E2A,4EBA,90FD,9700,8981,7528,7CBE,5FC3,53BB,6D47,704C,771F,5FC3,4EA4,6765,7684,4E0D,4E00,5B9A,662F,670B,53CB,53EF,662F,5047,610F,4EA4,6765,7684,4E00,5B9A,662F,53DB,5F92,90A3,4E00,5E74,6D41,5E74,4F34,968F,98DE,6C99,90A3,4E00,5E74,7EC6,96E8,51B2,5237,7275,6302,90A3,4E00,5E74,95E8,524D,9752,5C71,53D1,82BD,90A3,4E00,5E74,95E8,540E,5C0F,6811,843D,82B1,90A3,4E00,5E74,7ED3,675F,4E00,5E74,8BB0,5FC6,90A3,4E00,5E74,5F00,59CB,4E0D,4E8C,4E4B,65C5,90A3,4E00,5E74,5C81,5E8F,4E0D,5F97,5DF2,820D,53BB,90A3,4E00,5E74,4EE5,4E3A,4E86,65E0,7275,6302,5374,4E0D,77E5,6211,4EB2,624B,79CD,4E0B,68A6,82B1';
  const getARandom = () => start + __random(words.split(','));
  function reCall(size, fn) {
    let answer = '';
    return function concatWord() {
      let i = size;
      while (i > 0) {
        answer = typeof fn === 'function' && answer + fn();
        i--;
      }
      return answer;
    };
  }
  const getWords = reCall(num, getARandom);
  return unescape(getWords());
};

class Mock {
  constructor(props, num = null) {
    if (__isObject(props)) {
      const absNum = __getLegalNum(num);
      if (absNum) __arrayMockAction(this, props, absNum);
      else __propsController(props, this);
      __idMaker.cleanId();
    } else {
      throw new TypeError('wrong arguments by Mock. expect key-value object');
    }
  }

  add(propName, value, start = false) {
    const flag = !!start;
    const strOrNum = (arg) => typeof arg === 'string' || typeof arg === 'number';
    const addValue = (oldVal, val) => (flag ? `${val}${oldVal}` : `${oldVal}${val}`);
    if (!strOrNum(propName) || !strOrNum(value)) return;
    if (this instanceof Array) {
      this.forEach((item) => {
        if (item[propName] && strOrNum(item[propName])) {
          item[propName] = addValue(item[propName], value);
        }
      });
    } else {
      for (const key in this) {
        if (key === propName && strOrNum(this[key])) this[key] = addValue(this[key], value);
      }
    }
    return this;
  }
}

export default Mock;
