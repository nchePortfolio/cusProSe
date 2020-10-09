# -*- coding: utf-8 -*-
"""
Created on Sun Apr 19 15:14:00 2020

@author: nicolas
"""

import tkinter as tk


class Framelist(tk.LabelFrame):
    def __init__(self, master, width=150, height=150, bd=1, title=''):
        tk.LabelFrame.__init__(self, master, width=width, height=height, bd=bd,
                          bg='white', relief=tk.FLAT,
                          highlightbackground='black', highlightthickness=2,
                          text=title, labelanchor='n')
        self.master = master
        self.initialize()
        self.create_scrollbar()
        
    def initialize(self):
        # ensure a consistent GUI size
        self.grid_propagate(0)
        
        # implement stretchability
        self.grid_rowconfigure(0, weight=1)
        self.grid_columnconfigure(0, weight=1)
        
    def create_scrollbar(self):
        self.scrollb = tk.Scrollbar(self, orient=tk.VERTICAL)
        self.scrollb.grid(row=0, column=1, sticky='nsew')

        self.text = tk.Text(self, yscrollcommand=self.scrollb.set, bg='white')
        self.text.grid(row=0, column=0, sticky="nsew", padx=1, pady=1)
        self.text.insert("end", 'test')
        
        self.scrollb.config(command=self.text.yview)


class Conditionframe(tk.LabelFrame):
    def __init__(self, master, width=300, height=100, bd=2):
        tk.LabelFrame.__init__(self, master, width=width, height=height, bd=bd,
                          bg='white', relief=tk.FLAT,
                          highlightbackground='black', highlightthickness=2,
                          text='Condition', labelanchor='n')
        self.master = master        
        self.initialize()
        
    def initialize(self):
        self.entries()
        self.buttons()

    def configure_grid(self):
        for i in range(2):
            self.rowconfigure(i, weight=1)
        for i in range(5):
            self.columnconfigure(i, weight=1)
            
    def entries(self):
        self.label_mandatory = tk.Label(self, text='Mandatory:', width=10, relief=tk.GROOVE)
        self.label_mandatory.grid(row=0, column=0, padx=1, pady=0)
        self.entry_mandatory = tk.Entry(self, width=10)
        self.entry_mandatory.grid(row=0, column=1, padx=0, pady=0)
        
        self.label_score = tk.Label(self, text='Score:', width=10, relief=tk.GROOVE)
        self.label_score.grid(row=0, column=2, padx=1, pady=0)
        self.entry_score = tk.Entry(self, width=10)
        self.entry_score.grid(row=0, column=3, padx=0, pady=0)
        
        self.label_forbidden = tk.Label(self, text='Forbidden:', width=10, relief=tk.GROOVE)
        self.label_forbidden.grid(row=1, column=0, padx=1, pady=0)
        self.entry_forbidden = tk.Entry(self, width=10)
        self.entry_forbidden.grid(row=1, column=1, padx=0, pady=0)
        
    def buttons(self):
        self.insert_mandatory = tk.Button(self, text='Insert')
        self.insert_mandatory.grid(row=0, column=4, padx=5)
        
        self.insert_forbidden = tk.Button(self, text='Insert')
        self.insert_forbidden.grid(row=1, column=4, padx=5)
        

class Ruleframe(tk.LabelFrame):
    def __init__(self, master, width=400, height=360, bd=2):
        tk.LabelFrame.__init__(self, master, width=width, height=height, bd=bd,
                          bg='white', relief=tk.FLAT,
                          highlightbackground='black', highlightthickness=2,
                          text='Rule', labelanchor='n')
        self.master = master
        self.initialize()
        
    def initialize(self):
        self.configure_grid()
        
        self.entries()
        
        self.conditionframe = Conditionframe(master=self)
        self.conditionframe.grid(row=1, column=1, padx=2, pady=2, rowspan=2,
                                 columnspan=4, sticky='n')
                                 
        self.mandatory_framelist = Framelist(master=self, title='Mandatory list')
        self.mandatory_framelist.grid(row=3, column=1, padx=2, pady=0,
                                      rowspan=2, columnspan=2, sticky='n')
#        self.mandatory_framelist.grid_propagate(0)
        
        self.forbidden_framelist = Framelist(master=self, title='Forbidden list')
        self.forbidden_framelist.grid(row=3, column=3, padx=2, pady=0,
                                      rowspan=2, columnspan=2, sticky='n')
#        self.forbidden_framelist.grid_propagate(0)
        
    def configure_grid(self):
        for i in range(6):
            self.rowconfigure(i, weight=1)
        for i in range(6):
            self.columnconfigure(i, weight=1)
        
    def entries(self):
        self.label_name = tk.Label(self, text='Name:', width=5, relief=tk.GROOVE)
        self.label_name.grid(row=0, column=1, padx=1, pady=0, sticky='ew')
        self.entry_name = tk.Entry(self, width=6)
        self.entry_name.grid(row=0, column=2, padx=0, pady=0, sticky='ew')
        
        self.label_comment = tk.Label(self, text='Comment:', width=10, relief=tk.GROOVE)
        self.label_comment.grid(row=0, column=3, padx=1, pady=0, sticky='ew')
        self.entry_comment = tk.Entry(self, width=6)
        self.entry_comment.grid(row=0, column=4, padx=0, pady=0, sticky='ew')
        

class Mainframe(tk.LabelFrame):
    def __init__(self, master, width=600, height=400, bd=2):
        tk.LabelFrame.__init__(self, master, width=width, height=height, bd=bd,
                          bg='white', relief=tk.FLAT,
                          highlightbackground='black', highlightthickness=2,
                          text='Set rules', labelanchor='n')
        self.master = master
        self.configure_grid()
        self.initialize()

    def initialize(self):
        self.grid(padx=5, pady=5)
        self.grid_propagate(0)
        
        self.ruleframe = Ruleframe(master=self)
        self.ruleframe.grid(row=0, column=0, padx=2, pady=1, rowspan=3,
                            sticky='nsew')
        self.ruleframe.grid_propagate(0)
        
    def configure_grid(self):
        for row in range(3):
            self.rowconfigure(row, weight=1)
            
        self.columnconfigure(0, weight=3)
        self.columnconfigure(1, weight=1)
     

master = tk.Tk()
master.title("Creation of rules for ProSeCDA")
app = Mainframe(master=master)
app.mainloop()



root = tk.Tk()

scrollbar = tk.Scrollbar(root, text='scrollbar')
scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

listbox = tk.Listbox(root)
listbox.pack()

for i in range(100):
    listbox.insert(tk.END, i)

# attach listbox to scrollbar
listbox.config(yscrollcommand=scrollbar.set)
scrollbar.config(command=listbox.yview)

root.mainloop()






class Create_rules(tk.Frame):
    def __init__(self, width=500, height=500, bd=1, bg='white'):
        tk.Frame.__init__(self, width=width, height=height)
        self.pack()
        
        self.label_name = tk.Label(self, text='Name:', width=10, relief=tk.GROOVE)
        self.label_name.grid(row=0, column=0, padx=5, pady=15)
        self.entry_name = tk.Entry(self, width=15)
        self.entry_name.grid(row=0, column=1, padx=5, pady=15)
        
        self.label_comment = tk.Label(self, text='Comment:', width=10, relief=tk.GROOVE)
        self.label_comment.grid(row=0, column=2, padx=5, pady=15)
        self.entry_comment = tk.Entry(self, width=15)
        self.entry_comment.grid(row=0, column=3, padx=5, pady=15)
        
        self.label_mandatory = tk.Label(self, text='Mandatory:', width=10, relief=tk.GROOVE)
        self.label_mandatory.grid(row=1, column=0, padx=1, pady=2)
        self.entry_mandatory = tk.Entry(self, width=10)
        self.entry_mandatory.grid(row=1, column=1, padx=1, pady=2)
        
        self.label_score = tk.Label(self, text='Score:', width=10, relief=tk.GROOVE)
        self.label_score.grid(row=1, column=2, padx=1, pady=2)
        self.entry_score = tk.Entry(self, width=10)
        self.entry_score.grid(row=1, column=3, padx=1, pady=2)
        
        self.label_forbidden = tk.Label(self, text='Forbidden:', width=10, relief=tk.GROOVE)
        self.label_forbidden.grid(row=2, column=0, padx=1, pady=2)
        self.entry_forbidden = tk.Entry(self, width=10)
        self.entry_forbidden.grid(row=2, column=1, padx=1, pady=2)

Create_rules().mainloop()

root = tk.Tk()

frame1 = tk.Frame(root, width=250, height=250, bg='white')
frame1.grid(row=0, padx=5, pady=5)
frame1.grid_propagate(0)

frame2 = tk.Frame(root, width=250, height=250, bg='white')
frame2.grid(row=1, padx=5, pady=5)

frame3 = tk.Frame(frame1, width=100, height=200, bg='red')
frame3.grid(row=0, column=0, padx=10, pady=10)

frame4 = tk.Frame(frame1, width=100, height=200, bg='blue')
frame4.grid(row=0, column=1, padx=10, pady=10)

frame5 = tk.Frame(root, width=250, height=250, bg='white')
frame5.grid(row=1, padx=5, pady=5)

root.mainloop()



root = tk.Tk()

MainFrame = tk.Frame(root, width=385, height=460, relief='raised', borderwidth=5)
LabelFrame = tk.Frame(MainFrame, width=375, height=115, relief='raised', borderwidth=5)
ButtonFrame = tk.Frame(MainFrame, width=375, height=330, relief='raised', borderwidth=5)

some_label = tk.Label(LabelFrame, text='Simple Text')
some_button = tk.Button(ButtonFrame, text='Quit', command=root.destroy)

for frame in [MainFrame, LabelFrame, ButtonFrame]:
    frame.pack(expand=True, fill='both')
    frame.pack_propagate(0)

for widget in [some_label, some_button]:
    widget.pack(expand=True, fill='x', anchor='s')

root.mainloop()
