export class Consts {
  private static _CUSTOMER_KEY = 'customer';
  private static _ORDER_KEY = 'order';
  private static _SERVER = 'http://abramoffkirill-001-site1.htempurl.com/api';
  private static _ARTICLES = '/articles';
  private static _CUSTOMERS = '/customers';
  private static _PRODUCTS = '/products';
  private static _ORDERS = '/orders';
  private static _LOGIN_PARAM = 'login';
  private static _PASSWORD_PARAM = 'pass';
  private static _LOGIN = '/login';
  private static _LOGIN_REQUEST = Consts._SERVER+Consts._CUSTOMERS+Consts._LOGIN;
  private static _REG_REQUEST = Consts._SERVER+Consts._CUSTOMERS;
  private static _UPDATE_CUSTOMER_REQUEST = Consts._SERVER+Consts._CUSTOMERS;
  private static _ORDERS_REQUEST = Consts._SERVER + Consts._ORDERS;
  private static _DELETE_PRODUCT = Consts._SERVER+Consts._PRODUCTS;
  private static _ORDER_PARAM = 'orderId';
  private static _SEARCH_PARAM = 'search';
  private static _MIN_PRICE_PARAM = 'minPrice';
  private static _MAX_PRICE_PARAM = 'maxPrice';
  private static _COMPANIES = 'companies';


  static get SEARCH_PARAM(): string {
    return this._SEARCH_PARAM;
  }

  static get MIN_PRICE_PARAM(): string {
    return this._MIN_PRICE_PARAM;
  }

  static get MAX_PRICE_PARAM(): string {
    return this._MAX_PRICE_PARAM;
  }

  static get COMPANIES(): string {
    return this._COMPANIES;
  }

  static get ORDER_PARAM(): string {
    return this._ORDER_PARAM;
  }

  static get DELETE_PRODUCT(): string {
    return this._DELETE_PRODUCT;
  }

  static get ORDER_KEY(): string {
    return this._ORDER_KEY;
  }

  static get ORDERS(): string {
    return this._ORDERS;
  }

  static get ORDERS_REQUEST(): string {
    return this._ORDERS_REQUEST;
  }

  static get PRODUCTS(): string {
    return this._PRODUCTS;
  }

  static get UPDATE_CUSTOMER_REQUEST(): string {
    return this._UPDATE_CUSTOMER_REQUEST;
  }

  static get REG_REQUEST(): string {
    return this._REG_REQUEST;
  }

  static get CUSTOMERS(): string {
    return this._CUSTOMERS;
  }

  static get LOGIN_PARAM(): string {
    return this._LOGIN_PARAM;
  }

  static get PASSWORD_PARAM(): string {
    return this._PASSWORD_PARAM;
  }

  static get LOGIN(): string {
    return this._LOGIN;
  }

  static get LOGIN_REQUEST(): string {
    return this._LOGIN_REQUEST;
  }

  static get SERVER(): string {
    return this._SERVER;
  }

  static get ARTICLES(): string {
    return this._ARTICLES;
  }

  public static get CUSTOMER_KEY(): string {
    return this._CUSTOMER_KEY;
  }
}
