<template>
  <div class="animated fadeIn">
    <b-row class="work">
      <b-col
        md="3"
        class="work--item"
      >
        <a
          href="https://privy.id"
          target="_blank"
        >
          <b-img
            src="~/assets/images/work/privyid.svg"
            title="PT Privy Indentitas Digital"
            alt="PrivyID logo"
            width="250"
            fluid
          />
        </a>

        <span>Frontend Web Developer</span>
        <div class="text-muted">
          Oct 2017 - Present
        </div>
      </b-col>

      <b-col
        md="3"
        class="work--item"
      >
        <a
          href="https://integravity.co.id"
          target="_blank"
        >
          <b-img
            src="~/assets/images/work/integravity.png"
            title="PT Integravity Biru Makmur"
            alt="Integravity logo"
            width="250"
            fluid
          />
        </a>

        <span>Fullstack Web Developer</span>
        <div class="text-muted">
          Oct 2015 - Sep 2017
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default { layout: 'single-column' }
</script>
