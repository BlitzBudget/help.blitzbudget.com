<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg39.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Budget</h2>
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
              <h3 class="title">Budget</h3>
              <br>
              <br>
              <img src="img/gifs/budget/budget.gif" alt="Budget">
              <br>
              <br>
              Any budget can be added and viewed to the Blitzbudget. These budgets can be seen by clicking the
              <i>"Budgets"</i> option present in the sidebar.
              <br>
              <br>
              This page can be used to view budgets to control the expenses on the categories.
              <br>
              <br>
              <ul>
                <li>
                  <nuxt-link to="/budget/add">Add Budget</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/budget/edit">Edit Budget</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/budget/delete">Delete Budget</nuxt-link>
                </li>
              </ul>
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
    title: 'Budget',
  },
  layout: "default",
}
</script>
<style>
</style>