using System;
using System.Collections.Generic;

namespace FriendFinder.Models
{
    public partial class Post
    {
        public Post()
        {
            Comments = new HashSet<Comment>();
            PostFiles = new HashSet<PostFile>();
        }

        public long Id { get; set; }
        public string UserId { get; set; } = null!;
        public string Text { get; set; } = null!;
        public DateTime CreatedDate { get; set; }
        public bool IsDeleted { get; set; }

        public virtual ApplicationUser User { get; set; } = null!;
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<PostFile> PostFiles { get; set; }
    }
}
