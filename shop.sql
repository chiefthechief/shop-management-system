PGDMP                          {            shopcompany    15.3    15.3 1    I           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            J           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            K           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            L           1262    49350    shopcompany    DATABASE     �   CREATE DATABASE shopcompany WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United Kingdom.1252';
    DROP DATABASE shopcompany;
                postgres    false            �            1259    49381 	   customers    TABLE     =  CREATE TABLE public.customers (
    id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    tel_number integer NOT NULL,
    email character varying(80) NOT NULL,
    password character varying(88) NOT NULL,
    customer_address character varying(255)
);
    DROP TABLE public.customers;
       public         heap    postgres    false            �            1259    49371    delivery    TABLE     �   CREATE TABLE public.delivery (
    delivery_id integer NOT NULL,
    deliverer_id integer NOT NULL,
    delivery_report character varying(50) NOT NULL,
    customer_id integer NOT NULL,
    product_id character varying(50),
    delivery_time date
);
    DROP TABLE public.delivery;
       public         heap    postgres    false            �            1259    82285    delivery_timetable    TABLE     ~   CREATE TABLE public.delivery_timetable (
    deliverer_id integer NOT NULL,
    day_of_work character varying(20) NOT NULL
);
 &   DROP TABLE public.delivery_timetable;
       public         heap    postgres    false            �            1259    49356 	   inventory    TABLE       CREATE TABLE public.inventory (
    product_id character varying(50) NOT NULL,
    product_name character varying(50) NOT NULL,
    product_qty integer NOT NULL,
    supplier_id integer NOT NULL,
    product_price numeric NOT NULL,
    item_image character varying(255)
);
    DROP TABLE public.inventory;
       public         heap    postgres    false            �            1259    57673    mart    TABLE     �   CREATE TABLE public.mart (
    customer_id integer NOT NULL,
    product_id character varying(50) NOT NULL,
    type character varying(50) NOT NULL,
    qty integer
);
    DROP TABLE public.mart;
       public         heap    postgres    false            �            1259    49391    reciept    TABLE     �   CREATE TABLE public.reciept (
    reciept_id integer NOT NULL,
    customer_id integer NOT NULL,
    teller_id integer NOT NULL
);
    DROP TABLE public.reciept;
       public         heap    postgres    false            �            1259    82278    session    TABLE     �   CREATE TABLE public.session (
    sid character varying(255) NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) with time zone
);
    DROP TABLE public.session;
       public         heap    postgres    false            �            1259    49421    sold    TABLE     .  CREATE TABLE public.sold (
    sold_id integer NOT NULL,
    product_id character varying(50) NOT NULL,
    product_qty integer NOT NULL,
    mode character varying(50) NOT NULL,
    transmission character varying(50) NOT NULL,
    customer_id integer,
    reciept_id integer,
    teller_id integer
);
    DROP TABLE public.sold;
       public         heap    postgres    false            �            1259    57644    supplier    TABLE     �   CREATE TABLE public.supplier (
    supplier_id integer NOT NULL,
    supplier_name character varying(255) NOT NULL,
    contact integer
);
    DROP TABLE public.supplier;
       public         heap    postgres    false            �            1259    49361    teller    TABLE     �   CREATE TABLE public.teller (
    teller_id integer NOT NULL,
    t_arrival date NOT NULL,
    t_depart date NOT NULL,
    teller_log_code integer NOT NULL
);
    DROP TABLE public.teller;
       public         heap    postgres    false            �            1259    49351    workers    TABLE     |  CREATE TABLE public.workers (
    id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    role character varying(50) NOT NULL,
    dob date NOT NULL,
    id_number character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(80) NOT NULL,
    tel_number integer NOT NULL
);
    DROP TABLE public.workers;
       public         heap    postgres    false            @          0    49381 	   customers 
   TABLE DATA           m   COPY public.customers (id, first_name, last_name, tel_number, email, password, customer_address) FROM stdin;
    public          postgres    false    218   �=       ?          0    49371    delivery 
   TABLE DATA           v   COPY public.delivery (delivery_id, deliverer_id, delivery_report, customer_id, product_id, delivery_time) FROM stdin;
    public          postgres    false    217   �?       F          0    82285    delivery_timetable 
   TABLE DATA           G   COPY public.delivery_timetable (deliverer_id, day_of_work) FROM stdin;
    public          postgres    false    224   �?       =          0    49356 	   inventory 
   TABLE DATA           r   COPY public.inventory (product_id, product_name, product_qty, supplier_id, product_price, item_image) FROM stdin;
    public          postgres    false    215   @       D          0    57673    mart 
   TABLE DATA           B   COPY public.mart (customer_id, product_id, type, qty) FROM stdin;
    public          postgres    false    222   r@       A          0    49391    reciept 
   TABLE DATA           E   COPY public.reciept (reciept_id, customer_id, teller_id) FROM stdin;
    public          postgres    false    219   �@       E          0    82278    session 
   TABLE DATA           4   COPY public.session (sid, sess, expire) FROM stdin;
    public          postgres    false    223   A       B          0    49421    sold 
   TABLE DATA           x   COPY public.sold (sold_id, product_id, product_qty, mode, transmission, customer_id, reciept_id, teller_id) FROM stdin;
    public          postgres    false    220   �A       C          0    57644    supplier 
   TABLE DATA           G   COPY public.supplier (supplier_id, supplier_name, contact) FROM stdin;
    public          postgres    false    221   /B       >          0    49361    teller 
   TABLE DATA           Q   COPY public.teller (teller_id, t_arrival, t_depart, teller_log_code) FROM stdin;
    public          postgres    false    216   eB       <          0    49351    workers 
   TABLE DATA           o   COPY public.workers (id, first_name, last_name, role, dob, id_number, email, password, tel_number) FROM stdin;
    public          postgres    false    214   �B       �           2606    49385    customers customers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    218            �           2606    49375    delivery delivery_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_pkey PRIMARY KEY (delivery_id);
 @   ALTER TABLE ONLY public.delivery DROP CONSTRAINT delivery_pkey;
       public            postgres    false    217            �           2606    82294 *   delivery_timetable delivery_timetable_pkey 
   CONSTRAINT        ALTER TABLE ONLY public.delivery_timetable
    ADD CONSTRAINT delivery_timetable_pkey PRIMARY KEY (deliverer_id, day_of_work);
 T   ALTER TABLE ONLY public.delivery_timetable DROP CONSTRAINT delivery_timetable_pkey;
       public            postgres    false    224    224            �           2606    49360    inventory inventory_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT inventory_pkey PRIMARY KEY (product_id);
 B   ALTER TABLE ONLY public.inventory DROP CONSTRAINT inventory_pkey;
       public            postgres    false    215            �           2606    57679    mart mart_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.mart
    ADD CONSTRAINT mart_pkey PRIMARY KEY (customer_id, product_id, type);
 8   ALTER TABLE ONLY public.mart DROP CONSTRAINT mart_pkey;
       public            postgres    false    222    222    222            �           2606    49395    reciept reciept_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.reciept
    ADD CONSTRAINT reciept_pkey PRIMARY KEY (reciept_id);
 >   ALTER TABLE ONLY public.reciept DROP CONSTRAINT reciept_pkey;
       public            postgres    false    219            �           2606    82284    session session_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);
 >   ALTER TABLE ONLY public.session DROP CONSTRAINT session_pkey;
       public            postgres    false    223            �           2606    49425    sold sold_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.sold
    ADD CONSTRAINT sold_pkey PRIMARY KEY (sold_id);
 8   ALTER TABLE ONLY public.sold DROP CONSTRAINT sold_pkey;
       public            postgres    false    220            �           2606    57648    supplier supplier_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.supplier
    ADD CONSTRAINT supplier_pkey PRIMARY KEY (supplier_id);
 @   ALTER TABLE ONLY public.supplier DROP CONSTRAINT supplier_pkey;
       public            postgres    false    221            �           2606    57655    teller teller_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.teller
    ADD CONSTRAINT teller_pkey PRIMARY KEY (teller_log_code);
 <   ALTER TABLE ONLY public.teller DROP CONSTRAINT teller_pkey;
       public            postgres    false    216            �           2606    49355    workers workers_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.workers
    ADD CONSTRAINT workers_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.workers DROP CONSTRAINT workers_pkey;
       public            postgres    false    214            �           2606    49386 "   delivery delivery_customer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id);
 L   ALTER TABLE ONLY public.delivery DROP CONSTRAINT delivery_customer_id_fkey;
       public          postgres    false    218    217    3221            �           2606    49376 #   delivery delivery_deliverer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_deliverer_id_fkey FOREIGN KEY (deliverer_id) REFERENCES public.workers(id);
 M   ALTER TABLE ONLY public.delivery DROP CONSTRAINT delivery_deliverer_id_fkey;
       public          postgres    false    217    3213    214            �           2606    57656 !   delivery delivery_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.inventory(product_id);
 K   ALTER TABLE ONLY public.delivery DROP CONSTRAINT delivery_product_id_fkey;
       public          postgres    false    217    215    3215            �           2606    82288 7   delivery_timetable delivery_timetable_deliverer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.delivery_timetable
    ADD CONSTRAINT delivery_timetable_deliverer_id_fkey FOREIGN KEY (deliverer_id) REFERENCES public.workers(id);
 a   ALTER TABLE ONLY public.delivery_timetable DROP CONSTRAINT delivery_timetable_deliverer_id_fkey;
       public          postgres    false    224    214    3213            �           2606    57680    mart mart_customer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.mart
    ADD CONSTRAINT mart_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id);
 D   ALTER TABLE ONLY public.mart DROP CONSTRAINT mart_customer_id_fkey;
       public          postgres    false    222    218    3221            �           2606    57685    mart mart_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.mart
    ADD CONSTRAINT mart_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.inventory(product_id);
 C   ALTER TABLE ONLY public.mart DROP CONSTRAINT mart_product_id_fkey;
       public          postgres    false    215    3215    222            �           2606    49396     reciept reciept_customer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reciept
    ADD CONSTRAINT reciept_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id);
 J   ALTER TABLE ONLY public.reciept DROP CONSTRAINT reciept_customer_id_fkey;
       public          postgres    false    3221    219    218            �           2606    49401    reciept reciept_teller_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reciept
    ADD CONSTRAINT reciept_teller_id_fkey FOREIGN KEY (teller_id) REFERENCES public.workers(id);
 H   ALTER TABLE ONLY public.reciept DROP CONSTRAINT reciept_teller_id_fkey;
       public          postgres    false    214    3213    219            �           2606    49426    sold sold_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sold
    ADD CONSTRAINT sold_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.inventory(product_id);
 C   ALTER TABLE ONLY public.sold DROP CONSTRAINT sold_product_id_fkey;
       public          postgres    false    3215    215    220            �           2606    57649    sold sold_reciept_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sold
    ADD CONSTRAINT sold_reciept_id_fkey FOREIGN KEY (reciept_id) REFERENCES public.reciept(reciept_id);
 C   ALTER TABLE ONLY public.sold DROP CONSTRAINT sold_reciept_id_fkey;
       public          postgres    false    3223    219    220            �           2606    57666    sold sold_teller_id_fkey    FK CONSTRAINT     {   ALTER TABLE ONLY public.sold
    ADD CONSTRAINT sold_teller_id_fkey FOREIGN KEY (teller_id) REFERENCES public.workers(id);
 B   ALTER TABLE ONLY public.sold DROP CONSTRAINT sold_teller_id_fkey;
       public          postgres    false    214    3213    220            �           2606    49366    teller teller_teller_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.teller
    ADD CONSTRAINT teller_teller_id_fkey FOREIGN KEY (teller_id) REFERENCES public.workers(id) ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.teller DROP CONSTRAINT teller_teller_id_fkey;
       public          postgres    false    214    216    3213            @   �  x�}�M��0��u��.P���v�RAuF�̦@,"(��cL��sݞ���VžH����4HU%��b@o�?II�F���
 QTӞt0c��f?�|�*��0{����)�cNsH�R��{�6���C���7I|��J`�ig[�s0+&:��XlL���,�4�צ}f�-�����T`�h	�6�r��:|�[�ܙ��+·�'��I ;	�JA�|�T���<,�l��]�0��X���U�w��	���x0��{��R��Ÿ�y(���������g�=��d���r�VQ��t�DOL��y�׾�wcݩ���[^Y��%FhL�*	���j/���6nO����1�D�������k��{y�'���%���P���~���z��Y�;���ۭ]Cn$a�R���Nu]juxv���BW����k�k��˗�z(���n�Wg�<�3޲��Wf�;�SIX�����Z:WNp��o�����\	<      ?   ;   x�3442�4440��44006��5R�1~\��F&��LqK�A���H�C�\Хb���� �p�      F   !   x�3440����KI��2�CJS�A�=... }�      =   W   x��5200��LIM�Q�����4400 ��Fz@2Ə��Đ�9�(/�$3?���
��	�5����KWp.JL�N-�+0���qqq i}�      D   L   x�34002��5200�,�,���,.���2
��7�.7'9�����$!SL!d!$!CT!'��Lc� Th+�      A   )   x�3400�44006�4440�2����h|ߘ+F��� �5!      E   �   x����
�@�s>E�ײ~wMloF]
�$�C�.�������^�����/�Fy��z�t��y�nԕ�5���8x�]�Bp`/�Zd�J�8m��T�,��%4��57Fm��f��cP�Ɂ��>׵���g����!��AB]\�	e2����p���YĻC�E��l�Z'A{�!I|�O��zG��L�yZ�\      B   A   x�32006��5R�Ɯ�y9�y��E�ũEe���@Qi�ihh`�ReN�bSR��8F��� ��*�      C   &   x�340�(��M,�L�/�427741167����� ��O      >   /   x�3440�4202�5�Ѕ0��4��ih``b�e���I�W� ��      <   �   x�}ͽn�0��ٹ�Y�>�1v6h\� #$�nH�O�������yu����9��F�B��@� DO��D�>o� �t^��B��bS`�c�H6.+�}���m�n|��|.�ŗu��Z^>�,��gNvn�M�&O��r�oWjR�ͧ�j��<G�25�顮�m��K�Q/� �`��j��H�΀��q�yd.� ���,>���()������y?_sY�     