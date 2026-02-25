export default {
    computed: {
        language(){
          return this.initData.user.language
        },
        eventId(){
          return this.initData.setup.event.id
        },
        eventIsActive(){
          return this.initData.setup.event.isActive
        },
    }
}