export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      companies: {
        Row: {
          ceo_contact: string | null
          employees: number | null
          founded: string | null
          hq_location: string | null
          id: string
          name: string
          primaryinvestor: string | null
          sector: string | null
          stage: string | null
          valuation: number | null
        }
        Insert: {
          ceo_contact?: string | null
          employees?: number | null
          founded?: string | null
          hq_location?: string | null
          id?: string
          name: string
          primaryinvestor?: string | null
          sector?: string | null
          stage?: string | null
          valuation?: number | null
        }
        Update: {
          ceo_contact?: string | null
          employees?: number | null
          founded?: string | null
          hq_location?: string | null
          id?: string
          name?: string
          primaryinvestor?: string | null
          sector?: string | null
          stage?: string | null
          valuation?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_primaryinvestor"
            columns: ["primaryinvestor"]
            isOneToOne: false
            referencedRelation: "investors"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          company: string | null
          email: string | null
          id: string
          investor: string | null
          name: string | null
          role: string | null
        }
        Insert: {
          company?: string | null
          email?: string | null
          id?: string
          investor?: string | null
          name?: string | null
          role?: string | null
        }
        Update: {
          company?: string | null
          email?: string | null
          id?: string
          investor?: string | null
          name?: string | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_company"
            columns: ["company"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_investor"
            columns: ["investor"]
            isOneToOne: false
            referencedRelation: "investors"
            referencedColumns: ["id"]
          },
        ]
      }
      funds: {
        Row: {
          deployedcapital_m: number | null
          fund_size_m: number | null
          id: string
          investment_focus: string | null
          investor: string | null
          irr_percent: number | null
          name: string | null
          status: string | null
          vintage: number | null
        }
        Insert: {
          deployedcapital_m?: number | null
          fund_size_m?: number | null
          id?: string
          investment_focus?: string | null
          investor?: string | null
          irr_percent?: number | null
          name?: string | null
          status?: string | null
          vintage?: number | null
        }
        Update: {
          deployedcapital_m?: number | null
          fund_size_m?: number | null
          id?: string
          investment_focus?: string | null
          investor?: string | null
          irr_percent?: number | null
          name?: string | null
          status?: string | null
          vintage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_investor"
            columns: ["investor"]
            isOneToOne: false
            referencedRelation: "investors"
            referencedColumns: ["id"]
          },
        ]
      }
      investors: {
        Row: {
          aum_m: number | null
          focus_sector: string | null
          founded: string | null
          hq_location: string | null
          id: string
          managing_partner: string | null
          name: string | null
          type: string | null
        }
        Insert: {
          aum_m?: number | null
          focus_sector?: string | null
          founded?: string | null
          hq_location?: string | null
          id?: string
          managing_partner?: string | null
          name?: string | null
          type?: string | null
        }
        Update: {
          aum_m?: number | null
          focus_sector?: string | null
          founded?: string | null
          hq_location?: string | null
          id?: string
          managing_partner?: string | null
          name?: string | null
          type?: string | null
        }
        Relationships: []
      }
      news: {
        Row: {
          date: string | null
          id: string
          relatedcompany: string | null
          relatedfund: string | null
          sector: string | null
          source: string | null
          title: string | null
        }
        Insert: {
          date?: string | null
          id?: string
          relatedcompany?: string | null
          relatedfund?: string | null
          sector?: string | null
          source?: string | null
          title?: string | null
        }
        Update: {
          date?: string | null
          id?: string
          relatedcompany?: string | null
          relatedfund?: string | null
          sector?: string | null
          source?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_relatedcompany"
            columns: ["relatedcompany"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_relatedfund"
            columns: ["relatedfund"]
            isOneToOne: false
            referencedRelation: "funds"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
