<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg15.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Smart Link Transaction and Category</h2>
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
              <h3 class="title">Smart Link Transaction and Category</h3>
              <br>
              <br>
              <img src="img/gifs/transaction/smart-link/category.gif" alt="Category">
              <br>
              <br>
              Smart linking the transaction and categories enables any future addition of the transaction with the said
              description to be automatically linked to the category. This smart linking is extremely useful as it
              reduces the management overhead of continually requiring to manage the transaction and the application.
              <br>
              <br>
              We give you the liberty to link the transaction and the category. It could be done by adding the <strong>
                Transaction Description </strong> and the <strong>Category</strong>.
              <br>
              <br>
              <nuxt-link to="/category/category-link#article">#View Link
                Transactions and Categories</nuxt-link>
              <nuxt-link to="/categories#article">#Category</nuxt-link>
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
    title: 'Smart Link Transaction and Category',
  },
  layout: "default",
}
</script>
<style>
</style>