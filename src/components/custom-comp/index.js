Component({
    methods:{
        onClick(e){
            // console.log('自定义组件点击',this.props.onComponentClick,$$helper_0.V);
            // console.log(this.props.onComponentClick===this.props.componentClick);
            console.log('next',this);
            this.props.onComponentClick(e)
        }
    }
})