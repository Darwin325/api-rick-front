<script setup
    lang="ts">
import { useRoute } from "vue-router"
import { router } from "../routes"
import { verifyEmail } from "../services"

const routeParams = useRoute().params
if (routeParams.id && routeParams.hash) {
  verifyEmail( routeParams.id as string, routeParams.hash as string )
      .then( res => {
        alert( "Se ha verificado tu correo correctamente" )
        router.push( { name: "Login" } )
      } )
}
</script>