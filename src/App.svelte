<script lang="ts">
  import qrcode from "qrcode";

  let value = "https://github.com/zasdaym";
  let imageURL = "";

  $: {
    qrcode
      .toDataURL(value, {
        width: 240,
      })
      .then((dataURL) => (imageURL = dataURL));
  }
</script>

<main>
  <input type="text" bind:value />
  <br />
  <img src={imageURL} alt={value} />
</main>

<style>
  main {
    text-align: center;
  }
</style>
