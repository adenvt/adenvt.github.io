<template>
  <header>
    <b-navbar
      toggleable="md"
      type="light"
    >
      <b-navbar-brand to="/">
        <b-img
          height="30"
          src="~assets/images/logo.svg"
          alt="adenovid logo"
          title="adenov.id"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="navigation" />

      <b-collapse
        id="navigation"
        is-nav
      >
        <navbar />
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import Navbar from './Navbar'

export default { components: { Navbar } }
</script>
