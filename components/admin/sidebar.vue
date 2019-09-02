<template>
    <aside class="sidebar d-none d-md-block">
                <header class="sidebar-title">
                    
                    <h5 class="mt-1">Yan's Note</h5>

                    <a href="#" class="position-absolute" target="_blank">
                        <i class="material-icons mr-3">launch</i>
                    </a>

                </header> <!-- end of sidebar-title -->

                <nav class="navigation">
                    <li v-for="link in links">

                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="mr-2" v-html="link.path"></svg>
                            {{ link.name }} 
                        </a>

                    </li>
                    
                </nav>

                <div id="sidebar-profile">

                    <div class="media">
                        
                        <div class="media-body">
                            <h5 class="m-0">
                                <a href="#">User name</a>
                            </h5>
                            Administractor
                        </div>
                    </div>

                </div> <!-- end of sidebar-profile -->

            </aside> <!-- end of sidebar -->

</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    name: 'Notes',
                    link: 'Sample',
                    path: '<path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z"/>'
                },
                {
                    name: 'Tags',
                    link: 'Sample',
                    path: '<path fill="none" d="M0 0h24v24H0V0z"/><path d="M22.83 12.99L11.83 2H2v9.83l10.99 10.99 9.84-9.83zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>'
                },
                {
                    name: 'Profile',
                    link: 'Sample',
                    path: '<path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>'
                },
                {
                    name: 'Settings',
                    link: 'Sample',
                    path: '<path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>'
                }
            ]
        }
    }
}
</script>