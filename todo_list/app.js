new Vue({
    el:'#root',
    data:{
        all: [],
        text: "",
        status: "all"
    },
    methods:{
        add(){
            var obj={};
            obj.text=this.text;
            if (!obj.text) {
                alert('请输入内容');
                return;
            }           //内容
            obj.id=Math.random()+new Date().getTime();  //ID,随机数+现在时间
            obj.state=0;      //0:未完成，1 ：已完成
            obj.edit=true;
            this.all.push(obj)
            this.text=""
            console.log(this.all)
        },
        del(id){
            this.all=this.all.filter(function (obj) {
                if(obj.id!=id){
                    return obj;
                }                
            })
        },
        edit(item){
            item.edit=!item.edit
        },
        changeStatus(val){
            this.status=val;
        },
        changeState(obj){
            if (obj.state==0){
                obj.state=1;
            } else{
                obj.state=0;
            }
        }
    },
    computed: {
        datas: function () {
            return this.all.filter((obj) => {
                if (this.status == "all") {
                    return obj
                } else {
                    if (this.status == obj.state) {
                        return obj;
                    }
                }
            })
        }
    }
})