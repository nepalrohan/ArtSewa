import DashboardSidebar from "../components/DashboardSidebar";
import ArtManagement from "../components/seller/ArtManagement";

const SellerDashboard = () => {
  return (
    <div className='flex flex-col sm:flex-row '>
<DashboardSidebar/>
<div>
  {/* using switchcase to change pages */}
  <ArtManagement/>
</div>
    </div>
  )
}

export default SellerDashboard