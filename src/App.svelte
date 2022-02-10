<script lang="ts">
  import qrcode from "qrcode";

  let value = "https://github.com/zasdaym";
  let imageURL = "";
  let height = 240;
  let width = 240;

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
  <hr />
  <img src={imageURL} alt={value} {height} {width} />
</main>

<style>
  main {
    text-align: center;
  }
</style>
