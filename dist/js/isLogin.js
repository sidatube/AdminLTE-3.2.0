function isLogin() {
    var admin = JSON.parse(localStorage.getItem("admin"))
    if (admin == null)
        window.location.pathname = "login.html"
    if (!(admin.roles.includes("admin") || admin.roles.includes("mod")))
        window.location.pathname = "login.html"

}

function isAdmin() {
    var admin = JSON.parse(localStorage.getItem("admin"))
    return admin.roles.includes("admin")
}
isLogin()

document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname
    console.log(path,"path")
    var admin = JSON.parse(localStorage.getItem("admin"))
    document.querySelector('.main-sidebar.sidebar-dark-primary.elevation-4').innerHTML =
        ` 
   <!-- Brand Logo -->
   <a href="${window.location.origin}/index.html" class="brand-link">
     <img src="${window.location.origin}/dist/img/icon.webp" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
       style="opacity: .8">
     <span class="brand-text font-weight-light">Light novel</span>
   </a>

   <!-- Sidebar -->
   <div
     class="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
     <div class="os-resize-observer-host observed">
       <div class="os-resize-observer" style="left: 0px; right: auto;"></div>
     </div>
     <div class="os-size-auto-observer observed" style="height: calc(100% + 1px); float: left;">
       <div class="os-resize-observer"></div>
     </div>
     <div class="os-content-glue" style="margin: 0px -8px;"></div>
     <div class="os-padding">
       <div class="os-viewport os-viewport-native-scrollbars-invisible" style="overflow-y: scroll;">
         <div class="os-content" style="padding: 0px 8px; height: 100%; width: 100%;">
           <!-- Sidebar user panel (optional) -->
           <div class="user-panel mt-3 pb-3 mb-3 d-flex" id="helloAdmin">
             <div class="image">
               <img src="${admin.avatar?admin.avatar:window.location.origin+"/dist/img/default-avatar.png"}" class="img-circle elevation-2" alt="User Image">
             </div>
             <div class="info">
               <a href="javascript:;" class="d-block">${admin.name?admin.name:admin.avatar}</a>
             </div>
           </div>


           <!-- Sidebar Menu -->
           <nav class="mt-2" id="sidebarMenu">
             <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
               data-accordion="false">
               <!-- Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library -->


               <li class="nav-item">
                 <a href="${window.location.origin}/index.html" class="nav-link ${path.includes("index.html")||path==='/'?'active':''} ">
                   <i class="nav-icon fa-solid fa-house"></i>
                   <p>
                     Bảng tin
                   </p>
                 </a>

               </li>
               <li class="nav-item">
                 <a href="${window.location.origin}/pages/user.html" class="nav-link ${path.includes("user.html")?'active':''}">
                   <i class="nav-icon fa-solid fa-users"></i>
                   <p>
                     Người dùng
                   </p>
                 </a>

               </li>

               <li class="nav-item ${path.includes("pages/novel")?'menu-is-opening menu-open':''} ">
                 <a href="javascript:;" class="nav-link ${path.includes("pages/novel")?'active':''}">
                   <i class="nav-icon fa-solid fa-book"></i>
                   <p>
                     Truyện
                     <i class="right fas fa-angle-left"></i>
                   </p>
                 </a>
                 <ul class="nav nav-treeview">
                   <li class="nav-item">
                     <a href="${window.location.origin}/pages/novel.html" class="nav-link ${path.includes("/novel.html")?'active':''}">

                       <i class="far fa-circle nav-icon"></i>

                       <p>Danh sách</p>
                     </a>
                   </li>
                   <li class="nav-item">
                     <a href="${window.location.origin}/pages/novel/index-novel.html" class="nav-link ${path.includes("/index-novel.html")?'active':''}">
                       <i class="far fa-circle nav-icon"></i>
                       <p>
                         Tạo mới
                       </p>
                     </a>

                   </li>

                 </ul>
               </li>
               <li class="nav-item">
                 <a href="${window.location.origin}/pages/types.html" class="nav-link ${path.includes("/types.html")?'active':''}">
                   <i class="nav-icon fa-solid fa-list"></i>
                   <p>Thể loại</p>
                 </a>
               </li>


               <li class="nav-item ">
                 <a href="javascript:;" class="nav-link logout">
                   <i class="nav-icon fa-solid fa-right-from-bracket"></i>
                   <p>
                     Đăng xuất
                   </p>
                 </a>

               </li>
             </ul>
           </nav>
           <!-- /.sidebar-menu -->
         </div>
       </div>
     </div>
     <div class="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
       <div class="os-scrollbar-track">
         <div class="os-scrollbar-handle" style="width: 100%; transform: translate(0px, 0px);"></div>
       </div>
     </div>
     <div class="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
       <div class="os-scrollbar-track">
         <div class="os-scrollbar-handle" style="height: 57.1709%; transform: translate(0px, 0px);">
         </div>
       </div>
     </div>
     <div class="os-scrollbar-corner"></div>
   </div>
   <!-- /.sidebar -->
`   
 document.querySelector('.main-header.navbar.navbar-expand.navbar-dark').innerHTML =
 `<ul class="navbar-nav">
 <li class="nav-item">
   <a class="nav-link" data-widget="pushmenu" href="../#" role="button"><i class="fas fa-bars"></i></a>
 </li>
 <li class="nav-item d-none d-sm-inline-block">
   <a href="${window.location.origin}/index.html" class="nav-link">Home</a>
 </li>

</ul>

<!-- Right navbar links -->
<ul class="navbar-nav ml-auto">
 <!-- Navbar Search -->


 <!-- Messages Dropdown Menu -->

 <!-- Notifications Dropdown Menu -->

 <li class="nav-item">
   <a class="nav-link" data-widget="fullscreen" href="javascript:;" role="button">
     <i class="fas fa-expand-arrows-alt"></i>
   </a>
 </li>

</ul>`
    document.querySelector('.nav-link.logout').addEventListener('click', () => {
        localStorage.clear()
        window.location.pathname = "login.html"
    })
})