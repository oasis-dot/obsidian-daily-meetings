---
Created: <% tp.file.creation_date() %>
---

# <% moment(tp.file.title,'YYYY-MM-DD').format("dddd, MMMM DD, YYYY") %>

<< [[Daily notes/<% tp.date.now("YYYY", -1, tp.file.title) %>/<% tp.date.now("MM-MMMM", -1, tp.file.title) %>/<% tp.date.now("YYYY-MM-DD", -1, tp.file.title) %>|Yesterday]] | [[Daily notes/<% tp.date.now("YYYY", 1, tp.file.title) %>/<% tp.date.now("MM-MMMM", 1, tp.file.title) %>/<% tp.date.now("YYYY-MM-DD", 1, tp.file.title) %>|Tomorrow]] >>

---
### Today's meetings
<% tp.user.meetings(tp.file.title) %>
# 📝 Notes
- <% tp.file.cursor() %>

---
### Notes created today
```dataview
List FROM "" WHERE file.cday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.ctime asc
```

### Notes last touched today
```dataview
List FROM "" WHERE file.mday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.mtime asc
```
