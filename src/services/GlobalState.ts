export class GlobalStateKeeper{
    selectionId : number = 0;
    setSelectionId(id : number){ 
        this.selectionId = id;
    }
}

export const GlobalState = new GlobalStateKeeper();