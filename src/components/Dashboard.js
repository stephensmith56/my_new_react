import React from "react";
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, } from 'cdbreact';

function Dashboard() {

return (    
        <div className="Dashboard">
            <div class="head">
                <header>
                    <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center ">
                        <Navbar.Brand>AI Services</Navbar.Brand>
                        <Button className="text-end" type="button" variant="light">Logout</Button>
                    </nav>
                </header>
                <body>
                <CDBSidebar>
                    <div class="w3-col m4 l3">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars" />}></CDBSidebarHeader>
                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                            <CDBSidebarMenuItem icon="th-large">Computer Vision</CDBSidebarMenuItem>
                            <CDBSidebarMenuItem icon="sticky-note">Recommendation</CDBSidebarMenuItem>
                            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
                                NLP
                            </CDBSidebarMenuItem>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                    </div>
                </CDBSidebar>
                <div class="w3-col m8 l9">
                    <p className="text-start">Auto Inspection platform</p>
                    <p className="text-break">Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum.</p>
                    <button className="button-end" type="button" variant="light">Try it out</button>
                    <p className="text-start">Background Removal Service</p>
                    <p className="text-break">Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum.</p>
                    <button className="button-end" type="button" href="" variant="light">Try it out</button>
                </div>    
                </body> 
                           
            </div>                 
                
        </div> 
);
}
  
export default Dashboard;  