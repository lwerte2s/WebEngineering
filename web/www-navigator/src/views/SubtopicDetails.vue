<template>
    <section>
        <div class="subtopic-details">
            <h2 class="h2">{{subtopic.name}}</h2>
            <p>{{subtopic.content}}</p>
            <div class="references">
                <h1>References</h1>
                <div  v-for="reference in subtopic.references" :key="reference">
                    <a :href="reference">{{reference}}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import store from "@/wwwdata.js"
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

.subtopic-details img {
    max-width: 500px;
    height: auto;
    width: 100%;
    max-height: 400px;
}

.subtopic-details {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
}

p {
    margin: 0 40px;
    font-size: 20px;
    text-align: left;
}

.references {
    position: relative;
    bottom: 10px;
    padding-left: 10px;
    border-left: 2px solid gray;
    height: 1000px;
}

.h2 {
    position: relative;
    bottom: 30px;
    padding-right: 10px;
    padding-top: 20px;
    border-right: 2px solid gray;;
}



</style>