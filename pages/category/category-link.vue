<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/bg37.jpg')"></div>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Link Transaction and Category</h2>
                        <h4>Help Center</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="button-container">
                            <nuxt-link to="#article" class="btn btn-success btn-round btn-lg">
                                <i class="now-ui-icons text_align-left"></i> Read Article
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section" id="article">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 ml-auto mr-auto">
                            <h3 class="title">Link Category Link</h3>
                            <br>
                            <br>
                            <img src="img/gifs/category/category-link/category-link.gif" alt="Category Link">
                            <br>
                            <br>
                            A link can be established between the transaction descrition
                            with the category. That is to say that when you establish this link, any future
                            transactions with the exact description and amount (if available) would be used to link and
                            update the transaction with the category.
                            <br>
                            <br>
                            This page shows that link and all the links established by you (the user).
                            <br>
                            <br>
                            <nuxt-link to="/categories">#Category</nuxt-link>
                            <nuxt-link to="/transaction/smart-link/category#article">#Smart Link
                                Transactions and Categories</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "blog-posts",
    head: {
        title: 'View Linked Transaction and Categories',
    },
    layout: "default",
}
</script>
<style>
</style>