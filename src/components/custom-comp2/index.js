Component({
    methods:{
        onClick(){
            console.log('comp1 click')
        },
        onComponentClick(){
            console.log(this)
            console.log('comp2 click');
            // on开头的函数参数
            this.props.onComponentClick23()
            this.props.onComponentClick1()
            // 非on开头的函数传递
            this.props.componentClick()
            
        }
    }
})