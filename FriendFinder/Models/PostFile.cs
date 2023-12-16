using System;
using System.Collections.Generic;

namespace FriendFinder.Models
{
    public partial class PostFile
    {
        public long Id { get; set; }
        public long PostId { get; set; }
        public long FileId { get; set; }

        public virtual File File { get; set; } = null!;
        public virtual Post Post { get; set; } = null!;
    }
}
