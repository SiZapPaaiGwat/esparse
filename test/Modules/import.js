({

/** import "x"; **/
"import not allowed in non-module": {},

/*** import { x } from "x.js"; ***/
"import from a url": {
    type: "Module",
    statements: [
    {   type: "ImportDeclaration",
        specifiers: [
        {   type: "ImportSpecifier",
            remote: {
                type: "Identifier",
                value: "x"
            },
            local: null
        }],
        from: {
            type: "String",
            value: "x.js"
        }
    }]
},

/*** import { x } from y; ***/
"import from a lexical module": {
    type: "Module",
    statements: [
    {   type: "ImportDeclaration",
        specifiers: [
        {   type: "ImportSpecifier",
            remote: {
                type: "Identifier",
                value: "x"
            },
            local: null
        }],
        from: {
            type: "ModulePath",
            elements: [ 
            {   type: "Identifier",
                value: "y"
            }]
        }
    }]
},

/*** import { x as y } from "x.js"; ***/
"renaming imported bindings": {
    type: "Module",
    statements: [
    {   type: "ImportDeclaration",
        specifiers: [
        {   type: "ImportSpecifier",
            remote: {
                type: "Identifier",
                value: "x"
            },
            local: {
                type: "Identifier",
                value: "y"
            }
        }],
        from: {
            type: "String",
            value: "x.js"
        }
    }]
},

/*** import {} from "x.js"; ***/
"empty import specifier set": {
    type: "Module",
    statements: [
    {   type: "ImportDeclaration",
        specifiers: [],
        from: {
            type: "String",
            value: "x.js"
        }
    }]
},

/*** import { default as y } from "x.js"; ***/
"import a keyword-named binding": {
    type: "Module",
    statements: [
    {   type: "ImportDeclaration",
        specifiers: [
        {   type: "ImportSpecifier",
            remote: {
                type: "Identifier",
                value: "default"
            },
            local: {
                type: "Identifier",
                value: "y"
            }
        }],
        from: {
            type: "String",
            value: "x.js"
        }
    }]
},

/*** import { default } from "x.js"; ***/
"importing of non-identifier bindings is not allowed": {},

/*** import "x.js"; ***/
"import declaration without a specifier list":
{   type: "Module",
    statements: [
    {   type: "ImportDeclaration",
        specifiers: null,
        from:
        {   type: "String",
            value: "x.js"
        }
    }]
},

})