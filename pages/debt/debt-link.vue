<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/bg29.jpg')"></div>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Link Transaction and Debt</h2>
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
                            <h3 class="title">View Transaction and Debt Link</h3>
                            <br>
                            <br>
                            <img src="img/gifs/debt/debt-link/debt-link.gif" alt="Budget">
                            <br>
                            <br>
                            A link can be established between the transaction descrition and / or the transaction amount
                            with the debt. That is to say that when you establish this link, any future
                            transactions with the exact description and amount (if available) would be used to link and
                            update the repaid debt amount.
                            <br>
                            <br>
                            This page shows that link and all the links established by you (the user).
                            <br>
                            <br>
                            <nuxt-link to="/debts">#Debt</nuxt-link>
                            <nuxt-link to="/transaction/smart-link/debt#article">#Smart Link
                                Transactions and Debts</nuxt-link>
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
        title: 'View Linked Transaction and Debts',
    },
    layout: "default",
}
</script>
<style>
</style>