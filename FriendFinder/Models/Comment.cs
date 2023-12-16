using System;
using System.Collections.Generic;

namespace FriendFinder.Models
{
    public partial class Comment
    {
        public long Id { get; set; }
        public string UserId { get; set; } = null!;
        public long PostId { get; set; }
        public string Text { get; set; } = null!;
        public DateTime CreatedDate { get; set; }
        public bool IsDeleted { get; set; }

        public virtual Post Post { get; set; } = null!;
        public virtual ApplicationUser User { get; set; } = null!;
    }
}
