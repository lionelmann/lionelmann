<template>
  <div>
    <div><h2>Principles for building a better web</h2></div>
    <div class="grid-container">
      <div class="grid-row span-row">
        <div>
          <p>
            Design, content and development should work together. When they do,
            the result is clearer, faster and more accessible. It’s better
            all-around.
          </p>
        </div>
        <img src="/noun-arrow-2.svg" class="arrow-2" />
      </div>
      <div class="grid-column">
        <img src="/noun-arrow-1.svg" class="arrow-1" />
        <div>
          <p>
            <span class="highlight"
              >Websites should be low-carbon and privacy-respecting</span
            >. If our work is environmentally-friendly, but we send user data to
            companies with poor privacy practices, we have no credibility.
          </p>
        </div>
      </div>
      <div class="grid-column">
        <div>
          <p>
            User experience and organisational goals go hand-in-hand. Both sets
            of needs can work together, promoting each other for a result that
            works for everyone.
          </p>
        </div>
        <img src="/noun-arrow-3.svg" class="arrow-3" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
h2 {
  font: normal 400 69px/110% Lora;
  max-width: 80%;
}
p {
  font: normal 400 23px/150% Lora;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  margin-top: 40px;
}

.grid-column,
.grid-row {
  display: grid;
  position: relative;
  width: 100%;
  padding: 40px;
  background-color: #252b34;
  border-radius: 32px;
  overflow: hidden;
}

.grid-column {
  grid-template-columns: 1fr 1fr;
}

.grid-row {
  grid-template-columns: 1fr;
}

.span-row {
  grid-row: span 2;
}

.arrow-1 {
  max-width: 270px;
  opacity: 0.5;
  position: absolute;
  right: -5px;
  top: -20px;
}

.arrow-2 {
  width: 100%;
  opacity: 0.5;
  position: absolute;
  left: -20px;
  bottom: -150px;
}

.arrow-3 {
  max-width: 250px;
  opacity: 0.5;
  position: absolute;
  right: -30px;
  bottom: -100px;
}

.highlight {
  color: white;
}
</style>
