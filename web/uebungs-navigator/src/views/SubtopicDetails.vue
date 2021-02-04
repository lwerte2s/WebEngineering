<template>
    <section>
        <div class="subtopic-details">
            <h2 class="h2">{{subtopic.name}}</h2>
            <div class="borders">
                <iframe :src=subtopic.url frameborder="0" ></iframe>
            </div>
            
        </div>
    </section>
</template>

<script>
import store from "@/uebungsdaten.js"
export default {
    props: {
        name:{
            type: String,
            required: true,
        },
        subtopicName:{
            type: String,
            required: true,
        }
    },
    computed: {
        topic(){
            return store.topics.find(
                topic => topic.name === this.name
            );
        },
        subtopic(){
            return this.topic.subtopics.find(
                subtopic => subtopic.name === this.subtopicName
            );
        }
    }

};
</script>

<style scoped>


.subtopic-details {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
}

p {
    font-size: 20px;
    text-align: left;
    padding: 10px;

}

.references {
    position: relative;
    bottom: 10px;
    padding-left: 10px; 
}

.h2 {
    position: relative;
    bottom: 30px;
    padding-right: 10px;
    padding-top: 20px;
}

.borders {
    border-left: 2px solid gray;
    border-right: 2px solid gray;
    min-height: 70vh;
}

iframe {
    min-width: 80vw;
    min-height: 70vh;
}


</style>