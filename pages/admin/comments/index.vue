<template>
  <div class="container">
    <no-ssr>
      <comment-table
        :thead="['Name', 'Text', 'Status', 'Chenge Status', 'Delete']"
      >
        <tbody slot="tbody">
          <tr v-for="comment in comments" :key="comment.id">
            <td>
              <span>{{ comment.name }}</span>
            </td>
            <td>
              <span>{{ comment.text }}</span>
            </td>
            <td>
              <span v-if="comment.publish" class="badge rounded-pill bg-success"
                >Publush</span
              >
              <span v-else class="badge rounded-pill bg-warning text-dark"
                >Hidden</span
              >
            </td>
            <td>
              <button
                @click="changeStatus(comment)"
                class="btn btn-outline-primary btn-sm"
              >
                Change Status
              </button>
            </td>
            <td>
              <button
                @click="deleteComment(comment.id)"
                class="btn btn-outline-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </comment-table>
    </no-ssr>
  </div>
</template>

<script>
import axios from "axios";
import commentTable from "@/components/admin/CommentTable.vue";

export default {
  components: {
    commentTable,
  },
  layout: "admin",
  data() {
    return {
      comments: [],
    };
  },
  mounted() {
    this.loadComments();
  },
  methods: {
    loadComments() {
      axios
        .get(
          "https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json"
        )
        .then((res) => {
          let commentsArray = [];
          Object.keys(res.data).forEach((key) => {
            const comment = res.data[key];
            commentsArray.push({ ...comment, id: key });
          });
          // console.log(commentsArray)
          this.comments = commentsArray;
        })
        .catch((e) => console.log(e));
    },

    changeStatus(comment) {
      // console.log('change status comment: ', comment)
      comment.publish = !comment.publish;
      axios.put(
        `https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/comments/${comment.id}.json`,
        comment
      );
    },
    deleteComment(id) {
      axios
        .delete(
          `https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/comments/${id}.json`
        )
        .then((res) => {
          this.loadComments();
        })
        .catch(e => console.log(e))
    },
  },
};
</script>
