export class Tag{
    static readonly ANGULAR = new Tag('Angualr','red');
    static readonly TYPESCRIPT = new Tag('TypeScript','darkred');
    // static readonly PYTHON = new Tag('python','darkpink');
    static readonly CSHARP = new Tag('C#','green');
    // static readonly JAVA = new Tag('Java','orange');
    static readonly JAVASCRIPT = new Tag('JavaScript','purple');
    // static readonly REACT = new Tag('react','blue');
    // static readonly NODEJS = new Tag('Nodejs','yellow');
    static readonly ASPNET = new Tag('aspnet','brown');
   

    private constructor(private readonly key: string, public readonly color:string){

    }
    toString(){
        return this.key;
    }
}