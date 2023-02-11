// export class PreviewImage{

//     constructor(public src:string){
        
//     }}
// class Message{
//     message:string;
//     constructor(message:string){
//         this.message=message
//     }
    
// }
export class Target{
   isImage:boolean=false;
   isMessage:boolean=false;
   clickableText:boolean=false;
   plainText:boolean=false;
   isText:boolean=false;
   isNull=true;
   
    constructor(public string:string, targetType:string){
        targetType==="null"?this.isNull = true:this.isNull=false;
        targetType==="image"? this.isImage = true : this.isImage=false;
        targetType==="message"?this.isMessage=true:this.isMessage=false;
        targetType==="clickableText"?this.clickableText=true:this.clickableText=false;
        targetType==="plainText"?this.plainText=true:this.plainText=false;
        (this.plainText || this.clickableText)? this.isText=true:this.isText=false;
        

        
    }
}

export class AppNotification{
    charLength:number=0;
    constructor(public read:boolean,public time:string,public image:string,public name:string,public action:string,public target:Target){

        this.charLength= this.name.length+this.action.length+this.target.string.length
        console.log(this.name,this.charLength,this.target.isText)
    }
}