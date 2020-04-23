/*1)  STRUCTURAL PRESENTATIONS
    * TYPES
    * INTERACES
    * ABSTRACTIONS
*/
/*export*/ interface paramsLoader {
    (paramsOBJ:paramsOBJ): {paramsOBJ} | {create,read,update,delete}
};
/*export*/ interface paramsOBJ {
    [index: string]: string
    // let pS = { // params_obj
        // name: function as string
        // func: `$DTypes.function($p)`,
        // prop: `$DTypes.string($p)`,
        // obj:  `$DTypes.object($p)`,
        // cb:   `$Dtypes.function($p)`,
        // prop: `$Dtypes.string($p)`,
        // val:  `$Dtypes.undefined($p)`
    // };
};
/*export*/ interface func0props {
    validate: Function,
    block: Function
}
/*export*/ interface func0loaderobj {
    funClite: Function,
    paramsOBJ:paramsOBJ
}
/*export*/ interface func0Loader {
    (paramsOBJ:paramsOBJ): func0loaderobj
}
/*export*/ interface interface_pm {
	globalConfig,
	instance,
	funC
};
/*export*/ interface interface_funCinterface {
	name, description, author,
	notes,
	isStrict,isAsync,isThis,isCapsule,
	inputType,outputType,
	params,
	inputBehavior,outputBehavior,
	onError,
	validations,block,spec
};
    /*export*/ interface interface_meths {
      global,
      instance,
      funC
  };

type validate = Function;
type block    = Function;
type neW      = Function;
type deletE   = Function;
type extend = Function;
type implement = Function;

type debug = Boolean;   
type public_reflects_imports = Boolean; 
type public_async = Boolean;  
type public_reflects_static = Boolean;
type singleton = Boolean;
type public_reflects_internal = Boolean;
type public_visible = Boolean;  
type public_methods_auth = Boolean;
type public_mutable = Boolean;  
type public_expires = Boolean;
type public_gettable = Boolean;  
type public_auth = Boolean;
type public_settable = Boolean;  
type public_chainable = Boolean;
type public_input_interface = Object;   
type sessionable_requests = Boolean;
type public_output_interface = Object;   
type maximum_requests_concurrently = Boolean | Number;                              
type public_output = String;  
type hot_reload = Boolean;     
type name = String;
type extendS = Array<object>;
type implementS = Array<object>;
type constructor = Function;
type imports = string[];

type di  = enumStrAny;  type mi  = enumStrFunc;
type ds  = enumStrAny;  type ms  = enumStrFunc;
type dp  = enumStrAny;  type mp  = enumStrFunc;
type dp1 = enumStrAny;  type mp1 = enumStrFunc;
type dp2 = enumStrAny;  type mp2 = enumStrFunc;

/*export*/ interface funClite                   {   
    validate:   validate,   block:  block    
};
/*export*/ interface claS {
    (setupOBJ:setupOBJ):__claS__public
}
/*export*/ interface __claS__public             {};
/*export*/ interface __claS__instance_public    {
    new:        neW,        extend:     extend,
    delete:     deletE,     implement:  implement
};
/*export*/ interface enumStrFunc    {   [index: string]: Function   };
/*export*/ interface enumStrAny     {   [index: string]: any        };
/*export*/ interface settings {
    debug:                       debug,             public_reflects_imports:         public_reflects_imports,
    public_async:                public_async,      public_reflects_static:          public_reflects_static,
    singleton:                   singleton,         public_reflects_internal:        public_reflects_internal,
                                        
    public_visible:              public_visible,    public_methods_auth:             public_methods_auth,
    public_mutable:              public_mutable,    public_expires:                  public_expires,
    public_gettable:             public_gettable,   public_auth:                     public_auth,
    public_settable:             public_settable,   public_chainable:                public_chainable,

    public_input_interface:      public_input_interface,    sessionable_requests:            sessionable_requests,
    public_output_interface:     public_output_interface,   maximum_requests_concurrently:   maximum_requests_concurrently,                              
    public_output:               public_output,             hot_reload:                      hot_reload     
};
/*export*/ interface setupOBJ {
    name:String, extends:Array<object>, implements:Array<object>,
    constructor:    constructor,
    settings:       settings,
    imports:        imports,
    events:         events,
    di:di,ds:ds,dp:dp,dp1:dp1,dp2:dp2,
    mi:mi,ms:ms,mp:mp,mp1:mp1,mp2:mp2
};
/*export*/ interface events         {   

};
/*export*/ interface __this__       {   [index:string]:any              };

/*export*/ interface __internal__   {   di: enumStrAny, mi: enumStrFunc };
/*export*/ interface __imports__    {   [index:string]:any              };
/*export*/ interface __public__     {   dp: enumStrAny, mp: enumStrFunc };
/*export*/ interface __middlemans__ {                                   };
/*export*/ interface __static__     {   ds: enumStrAny, ms: enumStrFunc };
/*export*/ interface __settings__   {
                                    debug:                  Boolean,
                                    singleton:              Boolean,
                                    visible:         Boolean,
                                    mutable:         Boolean,
                                    gettable:        Boolean,
                                    settable:        Boolean,
                                    chainable:       Boolean,
                                    async:           Boolean,
                                    mirror:          Boolean,
};
/*export*/ interface __constructor__ {
  ():any
}
/*export*/ interface __MEM__ {
    (setupOBJ:setupOBJ):{
        __settings__    :__settings__,
        __imports__     :__imports__,
        __middlemans__  :__middlemans__,
        __internal__    :__internal__,
        __static__      :__static__,
        __public__      :__public__,
        __constructor__ :__constructor__
    }
};
/*export*/ interface buildPublic {
    (
        __internal__    :__internal__,
        __static__      :__static__,
        __public__      :__public__,
        __settings__    :__settings__,
        __imports__     :__imports__,
        __middlemans__  :__middlemans__,
        constructorBlock:Function
    ):Function
};
/*export*/ interface publicConstruction {
    (
        __this__        :__this__,
        __internal__    :__internal__,
        __static__      :__static__,
        __public__      :__public__,
        __settings__    :__settings__,
        __imports__     :__imports__,
        __middlemans__  :__middlemans__,
        constructorBlock:Function
    ):void
};
/*export*/ interface constructionComplete {
    (
        __settings__    :__settings__,
        __this__        :__this__,
        __internal__    :__internal__
    ):void
};
