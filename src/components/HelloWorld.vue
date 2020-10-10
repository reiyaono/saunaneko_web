<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      <div class="px-4">
        <v-progress-linear
          color="light-green darken-1"
          height="20"
          v-model="progress"
          striped
          rounded />
      </div>
      </v-col>
      <v-col v-if="value > 0">
        <v-progress-circular
          :rotate="90"
          :size="100"
          :width="15"
          :value="value"
          indeterminate
          color="loading"
        >
        </v-progress-circular>
      </v-col>
      <v-col v-else>
        <v-col>
          {{ questions[phase] }}
        </v-col>
        <v-col cols="12" class="mb-auto" @click="action">
          <v-btn
            color="secondary"
            elevation="2"
            large
          >
          <v-icon class="ma-3">mdi-thumb-up</v-icon>
          はい
          </v-btn>
        </v-col>
        <v-col cols="12" class="mb-auto" @click="action">
          <v-btn
            color="secondary"
            elevation="2"
            large
          >
          <v-icon class="ma-2">mdi-thumb-down</v-icon>
          いいえ
          </v-btn>
        </v-col>
      </v-col>

      <!-- <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col> -->

      <!-- <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col> -->

      <!-- <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col> -->

      <!-- <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        value: 0,
        interval: 0,
        phase: 0,
        hoge: 0,
        questions: ['熱めのサウナが好き?',
                    'せっかくなのでアウフグース(ロウリュ)を受けたい',
                    'いくつかのねこ島を巡りたい?',
                    '市街地から近いねこ島がいい',
                    '観光もたくさんしたい',
                    '美味しいものもいっぱい食べたい']
      }
    },
    methods: {
      action () {
        const interval = setInterval(() => {
          if (this.value >= 100) {
            clearInterval(interval)
            this.phase += 1
            this.value = 0
            if (this.phase === this.questions.length) this.toResult()
          } else {
            this.value += 1
          }
        }, 7) 
      },
      toResult () {
        // this.$router.push({ name: 'Result' })
      },
    },
    computed: {
      progress () {
        return (this.phase / this.questions.length) * 100
      }
    }
  }
</script>
