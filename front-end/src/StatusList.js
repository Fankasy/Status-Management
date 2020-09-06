import Node from "./Node";
class StatusList{

    list;
    constructor() {
        let A = new Node();
        A.name = "A";
        let B = new Node();
        B.name = "B";
        let C = new Node();
        C.name = "C";
        let D = new Node();
        D.name = "D";
        A.connect.push(C);
        A.connect.push(D);
        B.connect.push(B);
        B.connect.push(D);
        C.connect.push(B);
        D.connect.push(C);
        this.list = [];
        this.list.push(A);
        this.list.push(B);
        this.list.push(C);
        this.list.push(D);
    }
}
export default StatusList;