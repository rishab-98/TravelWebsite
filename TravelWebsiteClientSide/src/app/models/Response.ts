export class Response{
    id;
   comment;
    status;
    file:File;
name:string;
contentType:string;
    constructor(id?:string, comment?:string, status?:string, file?:File,name?:string, content?:string){
        this.id=id;
        this.comment=comment;
        this.status=status;
        this.file=file;
        this.name=name;
        this.contentType=content
    }
}