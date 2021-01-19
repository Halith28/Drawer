import React from 'react';
import { withRouter } from "react-router-dom";
import { localStorageKeys } from '../../utils';
import routes from '../../router/routes';
import AppBar from  "../../components/topBar";
import { withStyles, Container} from '@material-ui/core';
import List from "./formList";
import Search from "./search";
import FormModal from "./addFormModal";

const data = [
    {
        form_name: "Full Body Assessment",
        created_by: "Ajay",
        created_at: new Date(),
        category: "Assessment"
   },
   {
        form_name: "Progress note",
        created_by: "Ajay",
        created_at: new Date(),
        category: "Report"
   },
   {
    form_name: "Progress note",
    created_by: "Ajay",
    created_at: new Date(),
    category: "Report"
  },
  {
    form_name: "Progress note",
    created_by: "Ajay",
    created_at: new Date(),
    category: "Report"
  },
  {
    form_name: "Progress note",
    created_by: "Ajay",
    created_at: new Date(),
    category: "Report"
  },
  {
    form_name: "Progress note",
    created_by: "Ajay",
    created_at: new Date(),
    category: "Report"
 },
 {
    form_name: "Progress note",
    created_by: "Ajay",
    created_at: new Date(),
    category: "Report"
 },
]

const styles = theme => ({
    root: {
        backgroundColor: "#ebebeb",
        flex: 1
    },
    mainArea: {
        backgroundColor: "#ebebeb",
        height: "calc( 100vh - 49px)",
        overflow: "auto"
    },
    listArea:{
        paddingTop: "30px"
    },
    search: {
        position: "sticky",
        zIndex: 1,
        top: "-1px",
        background: "#ebebeb",
    }
  });

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'You are in Home page.',
            loggingOut : false,
            formModal: false,
        }
    }

    logOut = () => {
        this.setState({
            loggingOut: true
        }, () => {
            setTimeout(() => {
                localStorage.removeItem(localStorageKeys.auth_token)
                this.props.history.push(routes.login)
            }, 5000);
        })
    }

    // componentDidMount(){
    //     // if(!localStorage.getItem(localStorageKeys.auth_token)){
    //     //     this.props.history.push(routes.login);
    //     // }
    // }

    addNewFormModal = () => {
        this.setState({...this.state, formModal: true})
    }

    modalClose = () => {
        this.setState({...this.state, formModal: false})
    };

    getFromId = (e, object) => {
        this.props.history.push("/formConfigure");
    }

    
    render(){
       const { classes } = this.props;
        return <div className={classes.root}>
            <AppBar  title={"Form Configurator"} buttonName={"+ add New"} onClickButton={()=> this.addNewFormModal()}/>
            <div className={classes.mainArea}>
                <Container maxWidth={"xl"} className={classes.listArea}>
                    <div className={classes.search}>
                     <Search />
                    </div>
                     {data.map((list, index)=>{
                         return(
                             <List key={index} {...list} onClickAction={this.getFromId} />
                         )
                     })}
                </Container>
            </div>
            <FormModal modalClose={this.modalClose} open={this.state.formModal}/>
        </div>
    }
}

export default withRouter(withStyles(styles)(Home));