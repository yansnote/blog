<template>
  <section class="container">
    <article class="border-bottom" v-for="note in notes" v-bind:key="note">
      <header class="d-inline-flex align-items-start">
        <h5><a href="#">{{ note.title }}</a></h5>
      </header>
      <section class="d-flex justify-content-start text-black-50 pb-2">
        <small>
          <i class="material-icons pr-1">today</i>
            {{ note.date }}
        </small>
        <small>
          <i class="material-icons pr-1">local_offer</i>
          some, tags
        </small>
      </section>
      <summary>
        {{ note.summary }}
      </summary>
    </article>
  </section>
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      notes: [
        {
          title: 'Title Of Note က မြန်မာလိုလည်း ဖြစ်နိုင်တယ်',
          date: '12 Feb 1991',
          tags: ['some', 'tags'],
          summary: 'သီဟိုဠ်မှ ဉာဏ်ကြီးရှင်သည် အာယုဝဍ္ဎနဆေးညွှန်းစာကို ဇလွန်ဈေးဘေး ဗာဒံပင်ထက် အဓိဋ္ဌာန်လျက် ဂဃနဏဖတ်ခဲ့သည်။'
        },
        {
          title: 'မြန်မာစာပေ၏ အနှစ်သာရ',
          date: '12 Feb 1991',
          tags: ['some', 'tags'],
          summary: 'လူတိုင်းသည် တူညီလွတ်လပ်သော ဂုဏ်သိက္ခာဖြင့်လည်းကောင်း၊ တူညီလွတ်လပ်သော အခွင့်အရေးများဖြင့်လည်းကောင်း မွေးဖွားလာကြသူများဖြစ်သည်။ ထိုသူတို့၌ ပိုင်းခြားဝေဖန်တတ်သော ဉာဏ်နှင့် ကျင့်ဝတ်သိတတ်သော စိတ်တို့ ရှိကြ၍၊ ထိုသူတို့သည် အချင်းချင်း မေတ္တာထား၍ ဆက်ဆံကျင့်သုံးသင့်၏။'
        },
        {
          title: 'Oh sleep! It is a gentle thing',
          date: '12 Feb 1991',
          tags: ['some', 'tags'],
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto delectus ratione cum molestiae inventore aliquid odit a, dolore, porro qui doloribus architecto sequi? At corporis atque delectus laborum obcaecati.'
        },
        {
          title: 'ရေသည်ယောက်ျား',
          date: '12 Feb 1991',
          tags: ['some', 'tags'],
          summary: 'လူ့ဘုံခန်းဝါ လူ့ပြည်ရွာမှာ ဝမ်းစာခဲခက် မုရင်းထမင်း ချဉ်ပေါင်ဟင်းနှင့် ဝမ်းရေးကခက်လွန်းလို့ အသက်ရှိစဉ် မသေခင်ကို ကောက်လျင်ကြီးဆန် နီတာလန်နှင့် ငါးသန်သေးနုပ် ရေလုံးပြုတ်များကို တစ်လုတ်ကယ်ဝဝ စားလိုက်ရလျှင်ဖြင့် အာဂပါးစပ် လူဖြစ်ကျိုးနပ်လေငဲ့'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
body {
  background: theme-color("pay-900");
}
</style>
