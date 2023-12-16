using System;
using System.Collections.Generic;

namespace FriendFinder.Models
{
    public partial class File
    {
        public File()
        {
            PostFiles = new HashSet<PostFile>();
        }

        public long Id { get; set; }
        public string Name { get; set; } = null!;
        public string Type { get; set; } = null!;
        public string Path { get; set; } = null!;
        public string Extension { get; set; } = null!;

        public virtual ICollection<PostFile> PostFiles { get; set; }
    }
}
