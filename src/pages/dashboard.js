import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMEnuPrincipal from './components/sidemenu';
import KpisPrincipal from './components/kpis';

function Dashboard() {
    return(
        <div>
            <NavBarPrincipal/>
            <SideMEnuPrincipal/>
            <KpisPrincipal/>
        </div>
    );
}



export default Dashboard;